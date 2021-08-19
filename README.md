# Discord-Bot-Base
This is a useful base to build your bot it includes a Command & Event handler. It will detect any new commands or events added into the register folders, the registered folders are defined inside the handler files.
 
# Read the following before reporting bugs!
### Program to use
This bot has only been tested on VS Code, expect it to not work in any other enviroment and requres you to have node.js installed on your system. VS Code allows you to open folder and allows access to all of your bot's files in one spot, and can be found on the following page [VS Code](https://code.visualstudio.com/).

### Project dependencies
The following dependencies must be installed `Discord.js` and `fs`. 

Dependencies can be installed by running `npm i <dependency>`.

### Implementing commands or events
Commands are easily implemented by creating files inside commands sub directory.

Events are easily implemented by creating files inside evnts sub directory.

Creating new folders for events or commands are easily registered in the respected handler file.

### Final touches
Add your discord bot token, bot tokens can be aquired on the devloper portal page of discord.
[Developer Portal Link](https://discord.com/developers/applications)

The bot can be ran by using `node .` inside the VS Code terminal.

This bot is ran locally but can easily be uploaded to a hosting service.
