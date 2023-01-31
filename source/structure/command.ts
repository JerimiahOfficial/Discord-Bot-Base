import { type Message } from 'discord.js'

import type Client from './client'

export default class Command {
  constructor (
    public name: string,
    public run: (client: Client, message: Message, args: string[]) => void | Promise<void>
  ) { }
}
