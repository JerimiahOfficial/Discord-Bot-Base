const Client = require('./Structures/Client.js');
const Config = require('./botconfig.json');
const client = new Client();

client.start(Config.token);
