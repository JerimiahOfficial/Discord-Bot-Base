import { Client, type ClientEvents, Collection } from 'discord.js'
import { config } from 'dotenv'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import Logger from '../helpers/logger'

import type Command from './command'
import type Event from './event'
import type Slash from './slash'

config()

/*

  Here is a list of intents you can use for your bot:
  https://discord.com/developers/docs/topics/gateway#list-of-intents

*/

export default class client extends Client {
  commands = new Collection<string, Command>()
  slashes = new Collection<string, Slash>()

  constructor () {
    super({
      intents: [
        'Guilds',
        'GuildMembers',
        'GuildMessages',
        'MessageContent'
      ]
    })
  }

  async importCommands (): Promise<void> {
    readdirSync('./dist/commands/').map(async (file) => {
      await import(join(__dirname, '../commands/', file)).then((file) => {
        const command = file.default as Command | undefined

        if (command === undefined) return

        this.commands.set(command.name, command)
        Logger('cyan', `[+] ${command.name} command loaded.`, true)
      }, () => {
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
      })
    })
  }

  async importEvents (): Promise<void> {
    readdirSync('./dist/events/').map(async (file) => {
      await import(join(__dirname, '../events/', file)).then((file) => {
        const event = file.default as Event<keyof ClientEvents> | undefined

        if (event === undefined) return

        this.on(event.name, (...args) => { void event.run(this, ...args) })
        Logger('cyan', `[+] ${event.name} event loaded.`, true)
      }, () => {
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
      })
    })
  }

  async importSlashes (): Promise<void> {
    readdirSync('./dist/slashes/').map(async (file) => {
      await import(join(__dirname, '../slashes/', file)).then((file) => {
        const slash = file.default as Slash | undefined

        if (slash === undefined) return

        this.slashes.set(slash.data.name, slash)
        Logger('cyan', `[+] ${slash.data.name} slash loaded.`, true)
      }, () => {
        Logger('red', `[-] ${file} couldn't be loaded.`, true)
      })
    })
  }

  async start (): Promise<void> {
    await this.importCommands()
    await this.importEvents()
    await this.importSlashes()

    await this.login(process.env.TOKEN)
  }
}
