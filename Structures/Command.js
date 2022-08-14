const Discord = require("discord.js");
const Client = require("./Client.js");

/**
 * @param {Discord.Message | Discord.Interaction} message
 * @param {String[]} args
 * @param {Client} client
 */
function Run(message, args, client) {}

class Command {
    /**
     * @typedef {{name: string, run: Run}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.run = options.run;
    }
}
module.exports = Command;
