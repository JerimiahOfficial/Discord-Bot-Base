import {
  ButtonStyle,
  ComponentType
} from 'discord.js'

import Command from '../structure/command'

export default new Command(
  'info',
  async (client, message, _args) => {
    if (client.user == null) return

    await message.channel.send(
      {
        embeds: [{
          author: {
            name: client.user.username,
            icon_url: client.user.displayAvatarURL()
          },
          color: 0xffff00,
          description: '**Bot base creator:** <@196494542768177154>'
        }],
        components: [
          {
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
        ]
      }
    )
    await message.delete()
  }
)
