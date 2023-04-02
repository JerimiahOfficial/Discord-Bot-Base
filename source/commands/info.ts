import {
  ActionRowData, ButtonStyle, ComponentType, MessageActionRowComponentBuilder,
  MessageActionRowComponentData
} from 'discord.js'

import Command from '../structure/command'

export default new Command(
  'info',
  async (client, message, _args) => {
    if (client.user == null) return

    const row: ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder> = {
      type: ComponentType.ActionRow,
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
        name: client.user.username,
        iconURL: client.user.displayAvatarURL()
      },
      color: 0x4a51b7,
      description: '**Bot base creator:** <@196494542768177154>'
    }

    await message.channel.send({ embeds: [infoEmbed], components: [row] })
    await message.delete()
  }
)
