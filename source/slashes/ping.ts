import { SlashCommandBuilder } from 'discord.js'

import Slash from '../structure/Slash'

export default new Slash(
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async (_client, interaction) => {
    await interaction.reply('Pong!')
  }
)
