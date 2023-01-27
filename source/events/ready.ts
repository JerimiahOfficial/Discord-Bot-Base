import { Events } from 'discord.js'

import Logger from '../helpers/logger'
import Event from '../structure/event'

export default new Event(
  Events.ClientReady,
  async (client) => {
    if (client.user == null) return

    client.user.setPresence({ activities: [{ name: 'with code.' }] })
    Logger('green', '\nBot initialized.', true)
  }
)
