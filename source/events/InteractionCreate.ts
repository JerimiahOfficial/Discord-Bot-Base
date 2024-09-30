import { Events } from "discord.js";
import Event from "../structure/event";
import { Commands } from "../structure/command";
import Write from "../helpers/logger";

const interactionCreate: Event<Events.InteractionCreate> = {
  name: Events.InteractionCreate,
  execute: async (interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = Commands.find(
        (cmd) => cmd.data.name === interaction.commandName,
      );
      if (command == null) return;

      try {
        await command.execute(interaction.client, interaction);
        Write(
          `Command ${interaction.commandName} executed by ${interaction.user.username}[${interaction.user.id}].`,
          "green",
        );
      } catch {
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
        Write("There was an error while executing this command!", "red");
      }
    }
  },
};

export default interactionCreate;
