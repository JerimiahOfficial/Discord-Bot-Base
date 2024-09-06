import { Events } from 'discord.js'

import Event from '../structure/event'
import Logger from '../helpers/logger'

const clientReady: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  execute: async (client) => {
    if (!client.isReady())
      throw new Error('Bot did not start properly')

    Logger('Bot initialized.', 'green')
  }
}

export default clientReady
