import { ComponentType, ButtonStyle } from 'discord.js'
import Command from '../structure/command'

export default new Command(
  'info',
  'Get information about the bot.',
  async (message, _args, client) => {
    const row = {
      components: [
        {
          type: ComponentType.Button,
          label: 'Github',
          style: ButtonStyle.Link,
          url: 'https://github.com/JerimiahOfficial'
        }
      ]
    }

    const infoEmbed = {
      author: {
        name: 'Bot Base',
        iconURL: 'https://img.icons8.com/fluency/2x/chatbot.png'
      },
      color: 0x4a51b7,
      description: '**Creator:** <@196494542768177154>'
    }

    await message.channel.send({ embeds: [infoEmbed], components: [row] })
    setTimeout(() => message.delete(), 500)
  }
)
