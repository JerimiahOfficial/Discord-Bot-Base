import { type ClientEvents } from 'discord.js'

export default class Event<Event extends keyof ClientEvents> {
  public constructor (
    public name: Event,
    public execute: (...args: ClientEvents[Event]) => void | Promise<void>
  ) { }
}
