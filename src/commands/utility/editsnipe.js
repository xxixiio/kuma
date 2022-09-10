const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "editsnipe",
    description: "Shows the most recent channel edited message.",
    category: "utility",
    dm: false,
    options: [
        { type: "channel", 
        name: "channel", 
        description: "Channel to get the most recent edited message.", 
        required: true }
    ],
    run: async (client, interaction) => {

        const channel = interaction.options.getChannel('channel');
        const message = client.editsnipe.get(channel.id);

        if(!message) return interaction.reply(client.lang.editsnipe.noMessage)
        if(channel.type !== 0) return interaction.reply(client.lang.editsnipe.noTextChannel)

        const embed = new Discord.EmbedBuilder()
            .setColor(client.config.EMBEDCOLOR)
            .setAuthor({"name": message.author.tag, "iconURL": message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})
            .setDescription(message.content.slice(0, 1900))
            .setFooter({"text": message.channel.name, "iconURL": interaction.member.user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})
            .setTimestamp(message.createdTimestamp)

        interaction.reply({ embeds: [embed] })
// notworking
    }
}