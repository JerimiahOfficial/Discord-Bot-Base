import Command from '../structure/command'

const say: Command = {
  name: 'say',
  execute: async (client, message, args) => {
    if (client.user == null) return

    const msg = args.join(' ').replace('!say ', '')

    await message.channel.send({ content: msg })
    await message.delete()
  }
}

export default say