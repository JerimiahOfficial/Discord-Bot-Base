# Discord-Bot-Base
This project was created using [VS Code](https://code.visualstudio.com/).
 
# Read the following before reporting bugs!
### Project dependencies
To install all the dependencies for this project open the folder with VS Code and run `npm i` in the terminal. This will download all the dependencies for your project so you don't have to go looking for them.

### Implementing commands or events
There are examples for an event also for a command inside the project file, for events I recommend using the following event cheat sheets [Cheat Sheet #1](https://github.com/armfxl/discord.js-cheatsheet/blob/main/cheatsheet.js) or [Cheat Sheat #2](https://gist.github.com/koad/316b265a91d933fd1b62dddfcc3ff584).

### Setting up the bot
You need to replace the bot token inside of .env file bot token can be found on [Developer Portal Link](https://discord.com/developers/applications) don't share this with anyone.

There are two scripts that you can execute in the terminal there is `npm run build` this will create a new directory called 'dist'. This directory is where tsc will build or compile your bot code into javascript, from there you can run `npm run start` which will start the bot.
