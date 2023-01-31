import { type BaseInteraction, type Client, type SlashCommandBuilder } from 'discord.js'

export default class Slash {
  constructor (
    public data: SlashCommandBuilder,
    public run: (client: Client, interaction: BaseInteraction) => void | Promise<void>
  ) { }
}
