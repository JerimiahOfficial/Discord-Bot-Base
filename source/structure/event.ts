import { ClientEvents } from 'discord.js'
import client from './client'

export default class Event {
  event: keyof ClientEvents
  run: (client: client, ...eventArgs) => void

  constructor (event, run) {
    this.event = event
    this.run = run
  }
}
