import { SlashCommandBuilder } from 'discord.js'

export default class Slash {
  data: SlashCommandBuilder
  execute: Function

  constructor (data: SlashCommandBuilder, execute: Function) {
    this.data = data
    this.execute = execute
  }
}
