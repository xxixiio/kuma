const Discord = require("discord.js");

module.exports = {
    async run(client, interaction) {

        const embed = new Discord.EmbedBuilder()
        .setColor(client.config.EMBEDCOLOR)
        .setAuthor({ "name": `• ${client.user.username} - Help Menu`, "iconURL": client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) })
        .setFooter({ "text": interaction.member.user.tag, "iconURL": interaction.member.user.displayAvatarURL({ dynamic: true, size : 1024, format: "png" })})
        .setTimestamp()

        let list = client.slashCommands.filter(cmd => cmd.category == interaction.values[0])

        if (interaction.values[0] == "administration") {

            embed.setTitle(`**Administration commands**`)
            .setDescription(`>>> \`${!list.length ? list.map(cmd => cmd.name).join("\n") : "None"}\``)

            await interaction.update({ embeds: [embed] })

        } else if (interaction.values[0] == "configuration") {

            embed.setTitle(`**Configuration commands**`)
            .setDescription(`>>> \`${!list.length ? list.map(cmd => cmd.name).join("\n") : "None"}\``)

            await interaction.update({ embeds: [embed] })

        } else if (interaction.values[0] == "funny") {

            embed.setTitle(`**Funny commands**`)
            .setDescription(`>>> \`${!list.length ? list.map(cmd => cmd.name).join("\n") : "None"}\``)

            await interaction.update({ embeds: [embed] })

        } else if (interaction.values[0] == "information") {

            embed.setTitle(`**Information commands**`)
            .setDescription(`>>> \`${!list.length ? list.map(cmd => cmd.name).join("\n") : "None"}\``)

            await interaction.update({ embeds: [embed] })

        } else if (interaction.values[0] == "moderation") {

            embed.setTitle(`**Moderation commands**`)
            .setDescription(`>>> \`${!list.length ? list.map(cmd => cmd.name).join("\n") : "None"}\``)

            await interaction.update({ embeds: [embed] })

        } else if (interaction.values[0] == "search") {

            embed.setTitle(`**Search commands**`)
            .setDescription(`>>> \`${!list.length ? list.map(cmd => cmd.name).join("\n") : "None"}\``)

            await interaction.update({ embeds: [embed] })

        } else if (interaction.values[0] == "utility") {

            embed.setTitle(`**Utility commands**`)
            .setDescription(`>>> \`${!list.length ? list.map(cmd => cmd.name).join("\n") : "None"}\``)

            await interaction.update({ embeds: [embed] })

        }

    }
}