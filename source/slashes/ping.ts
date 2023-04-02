import { SlashCommandBuilder } from 'discord.js'

import Logger from '../helpers/logger'
import Slash from '../structure/slash'

export default new Slash(
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async (_client, interaction) => {
    Logger('red', 'Pong!', true)
    await interaction.reply('Pong!')
  }
)
