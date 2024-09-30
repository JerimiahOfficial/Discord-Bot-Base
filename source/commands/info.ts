import { ButtonStyle, ComponentType, SlashCommandBuilder } from "discord.js";
import Slash from "../structure/command";

const info: Slash = new Slash(
  new SlashCommandBuilder()
    .setName("info")
    .setDescription("Displays basic info on the bot."),
  async (client, interaction) => {
    if (client.user == null) return;

    await interaction.reply({
      content: "",
      embeds: [
        {
          author: {
            name: client.user.username,
            icon_url: client.user.displayAvatarURL(),
          },
          color: 0x7cb342,
          description: "**Bot base creator:** <@196494542768177154>",
        },
      ],
      components: [
        {
          type: ComponentType.ActionRow,
          components: [
            {
              type: ComponentType.Button,
              label: "Github",
              style: ButtonStyle.Link,
              url: "https://github.com/JerimiahOfficial",
            },
          ],
        },
      ],
      ephemeral: true,
    });
  },
);

export default info;
