import { type ChatInputCommandInteraction, type SlashCommandBuilder } from 'discord.js'

export default class Slash {
  public constructor (
    public data: SlashCommandBuilder,
    public run: (interaction: ChatInputCommandInteraction) => void | Promise<void>
  ) { }
}
