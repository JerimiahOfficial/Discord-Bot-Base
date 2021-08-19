const fs = require('fs');
const Discord = require("discord.js");
const Command = require('./Command.js');
const Event = require('./Event.js');
const Config = require('../botconfig.json');
const intents = new Discord.Intents(32767);

class Client extends Discord.Client {
    constructor() {
        super( { intents })
        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
        this.prefix = Config.prefix;
    }

    start(token) {
        console.log(`${Config.consoleprefix}Initializing commands.`);
        fs.readdirSync("./commands/").filter(file => file.endsWith(".js")).forEach(file => {
            /**
             * @type {Command}
             */
            const command = require(`../commands/${file}`);
            console.log(`\t${command.name} loaded.`);
            this.commands.set(command.name, command)
        })

        console.log(`${Config.consoleprefix}Initializing events.`);
        fs.readdirSync('./events/').filter(file => file.endsWith(".js")).forEach(file => {
            /**
             * @type {Event}
             */
            const event = require(`../events/${file}`);
            console.log(`\t${event.event} loaded.`);
            this.on(event.event, event.run.bind(null, this));
        })
        this.login(token)
    }
}
module.exports = Client;