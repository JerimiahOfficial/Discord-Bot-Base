import { REST, Routes } from 'discord.js'
import { config } from 'dotenv'

import Logger from './Logger'
import Load from './Loader'

import type Slash from '../structure/Slash'
config()

if (process.env.TOKEN === undefined) throw new Error('TOKEN is not defined.')

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

async function RegisterSlashes (): Promise<void> {
  const slashes: any[] = []
  await Load<Slash>('slashes', slash => slashes.push(slash.data.toJSON()))

  Logger('yellow', 'Started refreshing application (/) commands.')

  if (process.env.CLIENT_ID === undefined) throw new Error('CLIENT_ID is not defined.')

  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: slashes }
  )
}

RegisterSlashes()
  .then(() => { Logger('green', 'Registered Slashes.') })
  .catch(() => { Logger('red', 'Failed to register Slashes.') })
