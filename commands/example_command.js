const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "ping",
	description: "Sends an embed with 'pong!' to let the user know the bot is working.",

	async run(message, args, client) {
		// Delete senders original message.
        setTimeout(() => message.delete(), 250);

        // Info fields
        let pingMessage = "```pong!```"

        // Create the embed.
        let pingEmbed = new Discord.MessageEmbed()
            .setColor(`DARK_RED`)
            .setDescription(`${pingMessage}`);

        // Send the embed.
        message.channel.send({ embeds: [pingEmbed] });
	}
});
