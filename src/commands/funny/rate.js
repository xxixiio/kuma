const Discord = require("discord.js");
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    name: "rate",
    description: "Rate something out of 100.",
    category: "funny",
    options: [{
        type: "string",
        name: "rate",
        description: "Something to rate.",
        required: true,
        choices: [],
    }],
    dm: false,
    run: async (client, interaction) => {

        let toRate = interaction.options.getString('rate');
        let rating = Math.floor(Math.random() * 99) + 1;

        interaction.reply(client.lang.rate.rating.replace("{toRate}", toRate).replace("{rating}", rating+"/100"));

    }
}