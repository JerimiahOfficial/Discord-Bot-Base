import { Events } from 'discord.js'

import Logger from '../helpers/logger'
import Event from '../structure/event'

const clientReady: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  execute: async (client) => {
    if (client.isReady())
      Logger('\nBot initialized.', 'green')
  }
}

export default clientReady
