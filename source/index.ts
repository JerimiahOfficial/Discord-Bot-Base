/*
  Discord Bot Base
  https://github.com/JerimiahOfficial/Discord-Bot-Base

  List of client intents:
  https://discordjs.guide/popular-topics/intents.html

  List of client events:
  https://discord.js.org/docs/packages/discord.js/main/ClientEvents:Interface
*/

import { Client, type ClientEvents, type ClientOptions } from "discord.js"
import { config } from "dotenv"
import Load from "./helpers/Loader"
import Event from "./structure/event"
import type Command from "./structure/command"
import { Commands } from "./structure/command"
config()

const clientOptions: ClientOptions = {
  presence: {
    status: 'online',
    activities: [
      {
        name: '⌨️ Playing with code.',
        type: 4
      }
    ]
  },
  intents: [
    'Guilds',
    'GuildMembers',
    'GuildMessages',
    'MessageContent'
  ]
}

const client: Client = new Client(clientOptions)
client.login(process.env.TOKEN)

await Load<Event<keyof ClientEvents>>('events', event => client.on(event.name, async (...args) => { await event.execute(...args) }))
await Load<Command>('commands', command => Commands.set(command.data.name, command))