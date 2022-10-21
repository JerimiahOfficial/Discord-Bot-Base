import Event from '../structure/event'
import Logger from '../helpers/logger'

export default new Event(
  'ready',
  async (client) => {
    client.user.setPresence({ activities: [{ name: 'with code.' }] })
    Logger('green', '\nBot initialized.', true)
  }
)
