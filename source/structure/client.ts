import { Client, Collection } from 'discord.js'
import { config } from 'dotenv'

import Load from '../helpers/Loader'

import type Command from './Command'
import type Event from './Event'
import type Slash from './Slash'

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

  async start (): Promise<void> {
    await Load<Command>('commands', command => this.commands.set(command.name, command))
    await Load<Event<any>>('events', event => this.on(event.name, async (...args) => { await event.execute(this, ...args) }))
    await Load<Slash>('slashes', slash => this.slashes.set(slash.data.name, slash))

    await this.login(process.env.TOKEN)
  }
}
