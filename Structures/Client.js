const Command = require("./Command.js");
const Discord = require("discord.js");
const Event = require("./Event.js");
const fs = require("fs");
const Logger = require("../helpers/logger.js");

class Client extends Discord.Client {
    constructor() {
        super({ intents: [ <itents that your bot is gonna use here> ] });
        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
        this.prefix = '<prefix that your bot is gonna use>';
    }

    start(token) {
        fs.readdirSync("./commands/")
            .filter((file) => file.endsWith(".js"))
            .forEach((file) => {
                /**
                 * @type {Command}
                 */
                const command = require(`../commands/${file}`);
                this.commands.set(command.name, command);
            });

        fs.readdirSync("./events/")
            .filter((file) => file.endsWith(".js"))
            .forEach((file) => {
                /**
                 * @type {Event}
                 */
                const event = require(`../events/${file}`);
                this.on(event.event, event.run.bind(null, this));
            });
            
        this.login(token);
    }
}
module.exports = Client;
