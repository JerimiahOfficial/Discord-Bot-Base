import { Events } from 'discord.js'

import Logger from '../helpers/logger'
import Event from '../structure/event'

const interactionCreate: Event<Events.InteractionCreate> = {
  name: Events.InteractionCreate,
  execute: async (client, interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = client.slashes.find((cmd) => cmd.data.name === interaction.commandName)
      if (command == null) return

      try {
        await command.execute(client, interaction)
        Logger(`Command ${interaction.commandName} executed by ${interaction.user.username}[${interaction.user.id}].`, 'green')
      } catch {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
        Logger('There was an error while executing this command!', 'red')
      }
    }
  }
}

export default interactionCreate
