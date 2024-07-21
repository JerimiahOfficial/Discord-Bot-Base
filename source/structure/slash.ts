import { type ChatInputCommandInteraction, type SlashCommandBuilder, type SlashCommandSubcommandsOnlyBuilder } from 'discord.js'

import type client from './client'

export default class Slash {
  public constructor (
    public data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand"> | SlashCommandSubcommandsOnlyBuilder,
    public execute: (client: client, interaction: ChatInputCommandInteraction) => Promise<void>
  ) { }
}
