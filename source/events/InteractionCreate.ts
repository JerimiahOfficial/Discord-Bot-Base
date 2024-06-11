import { Events } from 'discord.js'

import Logger from '../helpers/logger'
import Event from '../structure/event'

export default new Event(
  Events.InteractionCreate,
  async (client, interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = client.slashes.find((cmd) => cmd.data.name === interaction.commandName)
      if (command == null) return

      try {
        await command.execute(client, interaction)
        Logger(`Command ${interaction.commandName} executed`, 'green')
      } catch {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
        Logger('There was an error while executing this command!', 'red')
      }
    }
  }
)
