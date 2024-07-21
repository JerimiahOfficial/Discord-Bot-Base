import { SlashCommandOptionsOnlyBuilder, type ChatInputCommandInteraction, type SlashCommandBuilder } from 'discord.js'

import type client from './client'

export default class Slash {
  public constructor (
    public data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder,
    public execute: (client: client, interaction: ChatInputCommandInteraction) => Promise<void>
  ) { }
}
