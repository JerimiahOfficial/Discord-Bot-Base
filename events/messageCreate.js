const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.channel.type === 1)
        return;

    if (message.author.bot) 
        return;

    if (!message.content.startsWith("!")) 
        return;

    const content = message.content.split(" ");
    const command = client.commands.find((cmd) => cmd.name == content[0].substr(1).toLowerCase());
    const arguments = content.slice(1);

    if (!command)
	return;

    command.run(message, arguments, client);
});
