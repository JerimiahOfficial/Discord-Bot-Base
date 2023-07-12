import { type ChatInputCommandInteraction, type SlashCommandBuilder } from 'discord.js'

import type client from './client'

export default class Slash {
  public constructor (
    public data: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addBooleanOption' | 'addUserOption' | 'addChannelOption' | 'addRoleOption' | 'addAttachmentOption' | 'addMentionableOption' | 'addStringOption' | 'addIntegerOption' | 'addNumberOption'>,
    public run: (client: client, interaction: ChatInputCommandInteraction) => void | Promise<void>
  ) { }
}
