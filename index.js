const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 3243773
});
require('dotenv').config()

const { readdirSync } = require("fs");
client.config = process.env;

const mongoose = require("mongoose");
const superagent = require("superagent");

client.messageCommands = new Discord.Collection()
client.slashCommands = new Discord.Collection()
client.subCommands = new Discord.Collection()
client.interactions = new Discord.Collection()

client.snipe = new Discord.Collection()
client.editsnipe = new Discord.Collection()

client.prefix = client.config.PREFIX;
client.devs = ["606952517049253889"];

require("./src/handlers/antiCrash.js")(client);
require("./src/handlers/events.js")(client);
require("./src/handlers/slashCommands.js")(client);
require("./src/handlers/interactions.js")(client);

readdirSync("./src/messageCommands/").forEach(dir => {
    const commands = readdirSync(`./src/messageCommands/${dir}`).filter(file => file.endsWith(".js"));

    for(let file of commands) {
        let command = require(`./src/messageCommands/${dir}/` + file)

        client.messageCommands.set(command.name, command)
    }

});

client.login(client.config.TOKEN);