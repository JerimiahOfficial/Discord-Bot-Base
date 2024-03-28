import { type ClientEvents } from 'discord.js'

import type client from './client'

export default class Event<T extends keyof ClientEvents> {
  public constructor (
    public name: T,
    public execute: (client: client, ...event: ClientEvents[T]) => void | Promise<void>
  ) { }
}
