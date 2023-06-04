const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "avatar",
    description: "View your or a user's avatar.",
    category: "utility",
    dm: false,
    options: [
        { type: "user", 
        name: "user", 
        description: "User to display.", 
        required: true }
    ],
    run: async (client, interaction) => {

        const user = interaction.options.getUser('user') || interaction.member.user;

        const embed = new Discord.EmbedBuilder()
            .setColor(client.config.EMBEDCOLOR)
            .setAuthor({"name": user.tag + "'s avatar", "iconURL": user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})
            .setDescription(`[- Avatar URL](${user.displayAvatarURL({ dynamic: true, size : 1024, format: "png" })})`)
            .setImage(user.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
            .setFooter({"text": user.tag, "iconURL": user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})
            .setTimestamp()

        interaction.reply({ embeds: [embed] })

    }
}