const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

const superagent = require("superagent");

module.exports = {
    name: "achievement",
    description: "Create a custom Minecraft achievement.",
    category: "utility",
    options: [{
        type: "string",
        name: "text",
        description: "Text for the achievement",
        required: true,
        choices: []
    }],
    dm: false,
    run: async (client, interaction) => {

        let text = interaction.options.getString('text');

        if (text.length > 20) return interaction.reply(client.lang.achievement.lengthLimit)

        let links = ["https://www.minecraftskinstealer.com/achievement/a.php?i=38", "https://www.minecraftskinstealer.com/achievement/a.php?i=1", "https://www.minecraftskinstealer.com/achievement/a.php?i=21", "https://www.minecraftskinstealer.com/achievement/a.php?i=20", "https://www.minecraftskinstealer.com/achievement/a.php?i=13", "https://www.minecraftskinstealer.com/achievement/a.php?i=18", "https://www.minecraftskinstealer.com/achievement/a.php?i=17", "https://www.minecraftskinstealer.com/achievement/a.php?i=9", "https://www.minecraftskinstealer.com/achievement/a.php?i=31", "https://www.minecraftskinstealer.com/achievement/a.php?i=22", "https://www.minecraftskinstealer.com/achievement/a.php?i=23", "https://www.minecraftskinstealer.com/achievement/a.php?i=2", "https://www.minecraftskinstealer.com/achievement/a.php?i=11", "https://www.minecraftskinstealer.com/achievement/a.php?i=19", "https://www.minecraftskinstealer.com/achievement/a.php?i=33", "https://www.minecraftskinstealer.com/achievement/a.php?i=34", "https://www.minecraftskinstealer.com/achievement/a.php?i=26", "https://www.minecraftskinstealer.com/achievement/a.php?i=35", "https://www.minecraftskinstealer.com/achievement/a.php?i=6", "https://www.minecraftskinstealer.com/achievement/a.php?i=7", "https://www.minecraftskinstealer.com/achievement/a.php?i=10", "https://www.minecraftskinstealer.com/achievement/a.php?i=39", "https://www.minecraftskinstealer.com/achievement/a.php?i=4", "https://www.minecraftskinstealer.com/achievement/a.php?i=5", "https://www.minecraftskinstealer.com/achievement/a.php?i=28"]

        const { body } = await superagent.get(links[Math.floor(Math.random() * links.length)])
            .query({
                h: 'Achievement get!',
                t: text
            });

        interaction.reply({ files: [{ attachment: body, name: 'achievement.png' }] });

    }
}