const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "ping",
    description: "Shows my latency.",
    category: "utility",
    dm: true,
    options: [],
    run: async (client, interaction) => {

        const user = interaction.options.getUser('user') || interaction.member.user;

        const embed = new Discord.EmbedBuilder()
        .setColor(client.config.EMBEDCOLOR)
        .setDescription(`Pong! 🏓\n\`${Math.floor(interaction.client.ws.ping)} ms\``)

        interaction.reply({ embeds: [embed] })

        }
    }