const Discord = require("discord.js");

module.exports = async (client, message) => {

    client.snipe.set(message.channel.id, message);

}