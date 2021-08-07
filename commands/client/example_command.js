const Discord = require('discord.js');

module.exports = {
    config: {
        name: `ping`,
        aliases: [`ping`]
    },
    run: async (bot, message, args) => {
        // Delete senders original message.
        setTimeout(() => message.delete(), 250);
        
        // Reply to authors message.
        Message.reply("Pong!");

        // Log author of command sender and targets.
        console.log(`${message.author.username} used command "ping".`)
    }
}
