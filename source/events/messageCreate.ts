import Event from '../structure/event'
import Logger from '../helpers/logger'
import { Message } from 'discord.js'

export default new Event(
  'messageCreate',
  async (client, message: Message) => {
    if (message.channel.type === 1) return

    if (message.author.bot) return

    if (!message.content.startsWith('!')) return

    const { content } = message
    const command = client.commands.find((cmd) => cmd.name === content.split(' ')[0].slice(1).toLowerCase())
    const args = content.split(' ').splice(1)

    if (command == null) return

    command.run(message, args, client)
    Logger('yellow', `\t: ${message.author.username} used the executed "${content}".`, true)
  }
)
