const Discord = require("discord.js");
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    name: "say",
    description: "Make me say whatever you want.",
    category: "funny",
    options: [{
        type: "string",
        name: "text",
        description: "Your text.",
        required: true,
        choices: []
    }],
    dm: false,
    run: async (client, interaction) => {

        interaction.reply({ content: "Sent!", ephemeral: true })
        interaction.channel.send(interaction.options.getString('text'))

    }
}