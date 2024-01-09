import { type Message } from 'discord.js'

import type Client from './Client'

export default class Command {
  public constructor (
    public name: string,
    public execute: (client: Client, message: Message, args: string[]) => void | Promise<void>
  ) { }
}
