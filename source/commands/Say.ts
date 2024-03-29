import Command from '../structure/command'

export default new Command(
  'say',
  async (client, message, _args) => {
    if (client.user == null) return

    await message.channel.send({ content: message.content.replace('!say', '') })
    await message.delete()
  }
)
