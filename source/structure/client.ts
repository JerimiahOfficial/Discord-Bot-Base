import { Client, Collection } from 'discord.js'
import * as dotenv from 'dotenv'
import { readdirSync } from 'node:fs'
import { join } from 'path'

import Logger from '../helpers/logger'
import Command from './command'
import Event from './event'
import Slash from './slash'

dotenv.config()

export default class client extends Client {
  commands: Collection<string, Command> = new Collection()
  slashs: Collection<string, Slash> = new Collection()
  slashs: Collection<string, Slash> = new Collection()

  constructor () {
    super({
      intents: [
        'MessageContent', 'Guilds', 'GuildScheduledEvents', 'GuildPresences', 'GuildMessages',
        'GuildMessageReactions', 'GuildMembers', 'GuildIntegrations', 'GuildBans', 'DirectMessages',
        'DirectMessageReactions'
        'MessageContent', 'Guilds', 'GuildScheduledEvents', 'GuildPresences', 'GuildMessages',
        'GuildMessageReactions', 'GuildMembers', 'GuildIntegrations', 'GuildBans', 'DirectMessages',
        'DirectMessageReactions'
      ]
    })
  }

  async importCommands (): Promise<void> {
    const commands = readdirSync('./dist/commands/')

    commands.map(async (file) => {
      await import(join(__dirname, '../commands/', file)).then((file) => {
        const command = file.default as Command | undefined

        if (command === undefined) return

        this.commands.set(command.name, command)
        Logger('cyan', `[+] ${command.name} command loaded.`, true)
        Logger('cyan', `[+] ${command.name} command loaded.`, true)
      }).catch((err) => {
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
        console.error(err)
      })
    })
  }

  async importEvents (): Promise<void> {
    const events = readdirSync('./dist/events/')
  }

  async importEvents (): Promise<void> {
    const events = readdirSync('./dist/events/')

    events.map(async (file) => {
      await import(join(__dirname, '../events/', file)).then((file) => {
        const event = file.default as Event | undefined

        if (event === undefined) return

        this.on(event.event, event.run.bind(null, this))
        Logger('cyan', `[+] ${event.event} event loaded.`, true)
      }).catch((err) => {
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
        console.error(err)
      })
    })
  }

  async importSlashs (): Promise<void> {
    const slashs = readdirSync('./dist/slashs/')

    slashs.map(async (file) => {
      await import(join(__dirname, '../slashs/', file)).then((file) => {
        const slash = file.default as Slash | undefined

        if (slash === undefined) return

        this.slashs.set(slash.data.name, slash)
        Logger('cyan', `[+] ${slash.data.name} slash loaded.`, true)
      }).catch((err) => {
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
        console.error(err)
      })
    })
  }

  async start (): Promise<void> {
    await this.importCommands()
    await this.importEvents()
    await this.importSlashs()

    await this.login(process.env.TOKEN)
  }
}
