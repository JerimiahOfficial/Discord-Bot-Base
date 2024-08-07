import { Client, ClientEvents, Collection } from 'discord.js'
import { config } from 'dotenv'

import type Command from './command'
import type Event from './event'
import type Slash from './slash'
import Load from '../helpers/Loader'

config()

/*

  Here is a list of intents you can use for your bot:
  https://discord.com/developers/docs/topics/gateway#list-of-intents

*/

export default class client extends Client {
  commands = new Collection<string, Command>()
  slashes = new Collection<string, Slash>()

  constructor () {
    super(
      {
        intents: [
          'Guilds',
          'GuildMembers',
          'GuildMessages',
          'MessageContent'
        ],
        presence: {
          status: 'online',
          activities: [
            {
              name: '⌨️ Playing with code.',
              type: 4
            }
          ]
        }
      }
    )
  }

  async start (): Promise<void> {
    await Load<Command>('commands', command => this.commands.set(command.name, command))
    await Load<Event<keyof ClientEvents>>('events', event => this.on(event.name, async (...args) => { await event.execute(this, ...args) }))
    await Load<Slash>('slashes', slash => this.slashes.set(slash.data.name, slash))

    await this.login(process.env.TOKEN)
  }
}
