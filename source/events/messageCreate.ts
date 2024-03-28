import { Events } from 'discord.js'

import Logger from '../helpers/logger'
import Event from '../structure/event'

export default new Event(
  Events.MessageCreate,
  async (client, message) => {
    if (message.author.bot) return

    if (!message.content.startsWith('!')) return

    const { content } = message
    const command = client.commands.find((cmd) => cmd.name === content.split(' ')[0].slice(1).toLowerCase())
    const args = content.split(' ').splice(1)

    if (command === undefined) return

    void command.execute(client, message, args)
    Logger('yellow', `${message.author.username}[${message.author.id}] executed ${command.name} -> '${content}'.`)
  }
)
