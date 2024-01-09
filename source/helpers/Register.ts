import { REST, Routes } from 'discord.js'
import * as dotenv from 'dotenv'

import Logger from './Logger'
import Load from './Loader'

import type Slash from '../structure/Slash'
dotenv.config()

if (process.env.TOKEN === undefined) throw new Error('TOKEN is not defined.')

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

void (async () => {
  const slashes: any[] = []
  await Load<Slash>('slashes', slash => slashes.push(slash.data.toJSON()))

  try {
    Logger('cyan', 'Started refreshing application (/) commands.')

    if (process.env.CLIENT_ID === undefined) throw new Error('CLIENT_ID is not defined.')

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: slashes }
    )

    Logger('cyan', 'Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
    Logger('red', 'Couldn\'t reload application (/) commands.')
  }
})()
