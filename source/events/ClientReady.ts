import { Events } from 'discord.js'

import Event from '../structure/event'
import Logger from '../helpers/logger'

export default new Event(
  Events.ClientReady,
  async (client) => {
    if (client.user == null) return

    client.user.setPresence({ activities: [{ name: 'with code.' }] })
    Logger('green', '\nBot initialized.')
  }
)
