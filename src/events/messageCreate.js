const Discord = require("discord.js");

module.exports = async (client, message) => {

    if(!message.guild) return;
    if(message.author.bot) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.messageCommands.get(command)

    if (cmd) await cmd.run(client, message, args) 
    else return;

}