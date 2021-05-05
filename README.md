# Discord-Bot-Base
 A base for creating a discord bot.
 
# Read the following before reporting bugs!
### Program to use
This bot has only been tested on VS Code, expect it to not work in any other enviroment.

### Project dependencies
The following dependencies must be installed `Discord.js` and `fs`. 

Dependencies can be installed by running `npm i <dependency>`.

### Implementing commands or events
Commands are easily add, firstly add a sub dir to the commands folder and register it inside the handler file.

Same goes for events you must register the sub dir and create your event or add an event to existing sub dir.

### Final touches
After installing the dependencies add your discord bot token, bot tokens can be aquired on the devloper portal page of discord.
[Developer Portal Link](https://discord.com/developers/applications)

Then you can run your bot with `node .` inside the VS Code terminal.

This bot is ran locally but can easily be uploaded to a hosting service.
