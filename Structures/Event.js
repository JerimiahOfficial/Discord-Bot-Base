const Discord = require("discord.js");
const Client = require("./Client.js");

/**
 * @template    {keyof Discord.ClientEvents} K
 * @param       {Client} client
 * @param       {DiscordAPIError.ClientEvents[K]} eventArgs
 */
function Run(client, ...eventArgs) {}

/**
 * @template {keyof Discord.ClientEvents} K
 */
class Event {
    /**
     * @param {K} event
     * @param {Run<K>} run
     */
    constructor(event, run) {
        this.event = event;
        this.run = run;
    }
}
module.exports = Event;
