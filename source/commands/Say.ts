import Command from '../structure/command'

export default new Command(
  'say',
  async (client, message, args) => {
    if (client.user == null) return

    const msg = args.join(' ').replace('!say ', '')

    await message.channel.send({ content: msg })
    await message.delete()
  }
)
