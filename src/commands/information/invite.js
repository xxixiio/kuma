const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "invite",
    description: "A link to invite me!",
    category: "utility",
    options: [],
    dm: false,
    run: async (client, interaction) => {

        let invite = client.generateInvite({ scopes: ['bot'], permissions: ["0x0000000000000008"] });

        const embed = new Discord.EmbedBuilder()
        .setColor(client.config.EMBEDCOLOR)
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }))
        .setAuthor({ "name": client.lang.invite.title, "iconURL": interaction.member.user.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }) })
        .addFields([ { "name": client.lang.invite.invite, "value": `[${client.lang.invite.clickme}](${invite})` },
                    { "name": client.lang.invite.server, "value": `[${client.lang.invite.clickme}](https://discord.gg/tqdYpp9)`}])
        .setFooter({ "text": interaction.guild.name, "iconURL": interaction.guild.iconURL({ dynamic: true, size: 1024, format: "png" }) })

    interaction.reply({embeds: [embed]})

        }
    }      