import { SlashCommandBuilder } from 'discord.js'
import Slash from '../structure/slash'

const ping: Slash = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  execute: async (_client, interaction) => {
    await interaction.reply('Pong!')
  }
}

export default ping
