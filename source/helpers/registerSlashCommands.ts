import * as dotenv from 'dotenv'

import { REST, Routes } from 'discord.js'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import type Slash from '../structure/slash'
import logger from './logger'

dotenv.config()

const bot = {
  client_id: '',
  guild_id: ''
}

const commands: any = []
const commandFiles = readdirSync(join(__dirname, '../slashs')).filter(file => file.endsWith('.js'))

commandFiles.map(async (file) => {
  await import(join(__dirname, '../slashs', file)).then((file) => {
    const command = file.default as Slash | undefined

    if (command === undefined) return

    commands.push(command.data.toJSON())
    logger('cyan', `[+] ${command.data.name} slash loaded.`, true)
  }).catch((err) => {
    logger('red', `[-] ${file} couldn't be loaded.`, true)
    console.error(err)
  })
})

if (process.env.TOKEN === undefined) throw new Error('TOKEN is not defined.')

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

void (async () => {
  try {
    logger('cyan', 'Started refreshing application (/) commands.', true)

    await rest.put(
      Routes.applicationCommands(bot.client_id),
      { body: commands }
    )

    logger('cyan', 'Successfully reloaded application (/) commands.', true)
  } catch (error) {
    logger('red', 'Couldn\'t reload application (/) commands.', true)
    console.error(error)
  }
})()
