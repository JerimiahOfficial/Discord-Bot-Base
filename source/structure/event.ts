import { ClientEvents } from 'discord.js'

import client from './client'

export default class Event {
  event: keyof ClientEvents
  run: (client: client, ...eventArgs: any) => void

  constructor (event: keyof ClientEvents, run: (client: client, ...eventArgs: any) => any) {
    this.event = event
    this.run = run
  }
}
