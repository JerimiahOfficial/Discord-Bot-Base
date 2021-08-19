const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;

    // Find emoji's by id
    const yes = client.emojis.cache.get("870100889837371463");
    const no = client.emojis.cache.get("870100889480888351");

    switch (message.channelId) {
        case "870098799274627133": // Memes
                if (message.attachments.some(attachment => {
                    // Get the extension from the attachment name
                    const parts = attachment.name.split('.')
                    const extension = parts[parts.length - 1]

                    // Check if the extension is one of these ones
                    return ['png', 'jpg', 'jpeg', 'gif', 'mp4', 'webm', 'mov'].includes(extension)
                })) {
                    // Reacted with emoji's
                    message.react(yes);
                    message.react(no);
                }
                break;
        case "870105844455440395":
            // Delete senders original message.
            setTimeout(() => message.delete(), 250);
            break;
        case "870105870556606535":
            // Delete senders original message.
            setTimeout(() => message.delete(), 250);
            break;
        default:
            break;
    }

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
});