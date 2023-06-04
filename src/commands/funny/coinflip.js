const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "coinflip",
    description: "Throw a coin!",
    category: "funny",
    options: [],
    dm: false,
    run: async (client, interaction) => {

        let coin = client.lang.coinflip.coin;

        interaction.reply(client.lang.coinflip.response.replace("{coin}", coin[Math.floor(Math.random() * coin.length)]))

    }
}