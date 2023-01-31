import { type ClientEvents } from 'discord.js'

import type client from './client'

export default class Event<T extends keyof ClientEvents> {
  public constructor (
    public name: T,
    public run: (client: client, ...event: ClientEvents[T]) => void | Promise<void>
  ) { }
}
