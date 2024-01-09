import {
  type ActionRowData,
  ButtonStyle,
  ComponentType,
  type MessageActionRowComponentBuilder,
  type MessageActionRowComponentData
} from 'discord.js'

import Command from '../structure/Command'

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

export default new Command(
  'info',
  async (client, message, _args) => {
    if (client.user == null) return

    const infoEmbed = {
      author: {
        name: client.user.username,
        iconURL: client.user.displayAvatarURL()
      },
      color: 0xffff00,
      description: '**Bot base creator:** <@196494542768177154>'
    }

    await message.channel.send({ embeds: [infoEmbed], components: [row] })
    await message.delete()
  }
)
