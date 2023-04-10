import * as dotenv from 'dotenv'

import { REST, Routes } from 'discord.js'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import type Slash from '../structure/slash'
import logger from './logger'

dotenv.config()

const commands: any = []
readdirSync(join(__dirname, '../slashes')).map(async (file) => {
  await import(join(__dirname, '../slashes', file)).then((file) => {
    const command = file.default as Slash | undefined

    if (command === undefined) return

    commands.push(command.data.toJSON())
    logger('cyan', `[+] ${command.data.name} slash loaded.`, true)
  }, () => {
    logger('red', `[-] ${file} couldn't be loaded.`, true)
  })
})

if (process.env.TOKEN === undefined) throw new Error('TOKEN is not defined.')

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

void (async () => {
  try {
    logger('cyan', 'Started refreshing application (/) commands.', true)

    if (process.env.APP_ID === undefined) throw new Error('APP_ID is not defined.')

    await rest.put(
      Routes.applicationCommands(process.env.APP_ID),
      { body: commands }
    )

    logger('cyan', 'Successfully reloaded application (/) commands.', true)
  } catch (error) {
    console.error(error)
    logger('red', 'Couldn\'t reload application (/) commands.', true)
  }
})()
