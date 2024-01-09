import { type ChatInputCommandInteraction, type SlashCommandBuilder } from 'discord.js'

import type client from './Client'

export default class Slash {
  public constructor (
    public data: Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'>,
    public execute: (client: client, interaction: ChatInputCommandInteraction) => Promise<void>
  ) { }
}
