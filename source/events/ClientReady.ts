import { Events } from 'discord.js'

import Event from '../structure/Event'
import Logger from '../helpers/Logger'

export default new Event(
  Events.ClientReady,
  async (client) => {
    if (client.user == null) return

    client.user.setPresence({ activities: [{ name: 'with code.' }] })
    Logger('green', '\nBot initialized.')
  }
)
