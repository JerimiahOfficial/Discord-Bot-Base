/* eslint-disable @typescript-eslint/no-misused-promises */
import { Collection, Client } from 'discord.js'
import * as fs from 'fs'
import Logger from '../helpers/logger'
import Command from './command'
import Event from './event'
import Path from 'path'

export default class client extends Client {
  commands: Collection<string, Command> = new Collection()

  constructor () {
    super({
      intents: [
        'MessageContent', 'Guilds', 'GuildScheduledEvents', 'GuildPresences', 'GuildMessages', 'GuildMessageReactions',
        'GuildMembers', 'GuildIntegrations', 'GuildBans', 'DirectMessages', 'DirectMessageReactions'
      ]
    })
  }

  async start (token: string): Promise<void> {
    const commands = fs.readdirSync('./dist/commands/')
    commands.forEach(async (file) => {
      await import(Path.join(__dirname, '../commands/', file)).then((file) => {
        const command = file.default as Command | undefined

        if (command === undefined) return

        this.commands.set(command.name, command)
        Logger('cyan', `\t: ${command.name} command loaded.`, true)
      }).catch((err) => {
        Logger('red', `\t: ${file} couldn't be loaded.`, true)
        console.error(err)
      })
    })

    const events = fs.readdirSync('./dist/events/')
    events.forEach(async (file) => {
      await import(Path.join(__dirname, '../events/', file)).then((file) => {
        const event = file.default as Event | undefined

        if (event === undefined) return

        this.on(event.event, event.run.bind(null, this))
        Logger('cyan', `\t: ${event.event} event loaded.`, true)
      }).catch((err) => {
        Logger('red', `\t: ${file} couldn't be loaded.`, true)
        console.error(err)
      })
    })

    await this.login(token)
  }
}
