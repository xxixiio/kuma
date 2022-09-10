const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const database = require("../../handlers/database");
const guildSchema = require("../../schemas/guild");

module.exports = {
    name: "language",
    description: "Change my language.",
    category: "configuration",
    memberPermissions: Discord.PermissionFlagsBits.ManageGuild,
    options: [{
        type: "string",
        name: "language",
        description: "Language to change.",
        required: true,
        choices: [{
            "name": "English",
            "value": "en"
        },
        {
            "name": "Español",
            "value": "es"
        }]
    }],
    dm: false,
    run: async (client, interaction) => {

        let lang = interaction.options.getString('language')

        const embed = new Discord.EmbedBuilder()
        .setColor(client.config.EMBEDCOLOR)
        .setAuthor({ "name": `• ${client.user.username} - Language`, "iconURL": client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) })
        .setTimestamp()

            await guildSchema.findOneAndUpdate({ id: interaction.guild.id}, {$set: {lang: lang}})
            client.lang = require(`../../langs/${lang}.json`);
            
            embed.setDescription(client.lang.lang.changedLang)
            .setFooter({ "text": interaction.member.user.tag, "iconURL": interaction.member.user.displayAvatarURL({ dynamic: true, size : 1024, format: "png" })})

            interaction.reply({ embeds: [embed] })

    }
}