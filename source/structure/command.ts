import { Message, Client } from 'discord.js'

export default class Command {
  name: string
  description: string | undefined
  run: (message: Message, args: string[], client: Client) => void

  constructor (name, description, run) {
    this.name = name
    this.description = description
    this.run = run
  }
}
