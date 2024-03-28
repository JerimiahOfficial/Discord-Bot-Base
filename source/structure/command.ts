import { type Message } from 'discord.js'

import type Client from './client'

export default class Command {
  public constructor (
    public name: string,
    public execute: (client: Client, message: Message, args: string[]) => void | Promise<void>
  ) { }
}
