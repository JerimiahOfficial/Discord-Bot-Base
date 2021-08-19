const Event = require("../Structures/Event");
const Config = require("../botconfig.json")

module.exports = new Event("ready", (client) => {
    // Change bot status.
    client.user.setActivity('porn.', { type: 'WATCHING' });

    // Log the bots initialization.
    console.log(`${Config.consoleprefix}Bot initialized.`);
});