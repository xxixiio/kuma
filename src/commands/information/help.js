const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "help",
    description: "A list of all my commands.",
	category: "information",
    options: [{
		type: "string", 
		name: "command", 
		description: "Enter a command.",
		required: false
	}],
    dm: true,
    run: async (client, interaction) => {

		let command = interaction.options.getString('command')
        let invite = await client.generateInvite({ scopes: ['applications.commands'] })

        if(!command) {
            
            const embed = new Discord.EmbedBuilder()
            .setColor(client.config.EMBEDCOLOR)
            .setAuthor({ "name": `• ${client.user.username} - ${client.lang.help.mainMenu_title}`, "iconURL": client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) })
            .setDescription(client.lang.help.mainMenu_description.replace("{client.user}", client.user).replace("{invite}", invite))
            .setFooter({ "text": interaction.member.user.tag, "iconURL": interaction.member.user.displayAvatarURL({ dynamic: true, size : 1024, format: "png" })})
            .setTimestamp()

            const row = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.SelectMenuBuilder()
					.setCustomId('helpMenu')
					.setPlaceholder('Select a category.')
					.addOptions([
						{
							label: 'Administration',
							description: 'Administration commands',
							value: 'administration',
						},
						{
							label: 'Configuration',
							description: 'Configuration commands',
							value: 'configuration',
						},
						{
							label: 'Funny',
							description: 'Funny commands',
							value: 'funny',
						},
						{
							label: 'Information',
							description: 'Information commands',
							value: 'information',
						},
						{
							label: 'Moderation',
							description: 'Moderation commands',
							value: 'moderation',
						},
						{
							label: 'Search',
							description: 'Search commands',
							value: 'search',
						},
						{
							label: 'Utility',
							description: 'Utility commands',
							value: 'utility',
						}
					]),
			);

        interaction.reply({embeds: [embed], components: [row], ephemeral: true})

			} else if (client.slashCommands.get(command)) {

				let cmd = client.slashCommands.get(command)
				let usage = [];

				for(let op of cmd.options) {
					usage.push(command + " " + op.required ? "<"+op.name+">" : "("+op.name+")")
				}

				const embed = new Discord.EmbedBuilder()
				.setColor(client.config.EMBEDCOLOR)
				.setAuthor({ "name": `• ${client.user.username} - ${command}`, "iconURL": client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) })
				.setDescription(client.lang.help.command_description.replace("{description}", cmd.description).replace("{usage}", usage))
				.setFooter({ "text": interaction.member.user.tag, "iconURL": interaction.member.user.displayAvatarURL({ dynamic: true, size : 1024, format: "png" })})
				.setTimestamp()

				interaction.reply({ embeds: [embed], ephemeral: true })

			} else {
				interaction.reply(client.lang.help.doesntExist)
			}
        }
    }      