import { SlashCommandBuilder } from 'discord.js'

import Logger from '../helpers/logger'
import Slash from '../structure/slash'

export default new Slash(
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async (_client, interaction) => {
    await interaction.reply('Pong!')
    Logger('red', 'Pong!', true)
  }
)
