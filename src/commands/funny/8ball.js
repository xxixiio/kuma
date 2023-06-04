const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "8ball",
    description: "Ask me whatever you want.",
    category: "funny",
    options: [{
        type: "string",
        name: "question",
        description: "Question to ask.",
        required: true,
        choices: []
    }],
    dm: false,
    run: async (client, interaction) => {

        let question = interaction.options.getString('question');

        let responses = client.lang.eightball.responses

            interaction.reply(`**❓ ${question}**\n${responses[Math.floor(Math.random() * responses.length)]}`)

    }
}