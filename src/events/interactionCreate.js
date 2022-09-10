const database = require("../handlers/database");

module.exports = async (client, interaction) => {

    if (!interaction.isCommand() && !interaction.isButton() && !interaction.isSelectMenu()) return;

    let schemaGuild = await database.fetchGuild(interaction.guild.id)

    if(schemaGuild) interaction.lang = schemaGuild.lang
    else interaction.lang = "en";

    client.lang = require(`../langs/${interaction.lang}.json`);

    let cmd = client.slashCommands.get(interaction.commandName)
    let itr = client.interactions.get(interaction.customId)

    if (cmd) await cmd.run(client, interaction) 
    else if (itr) await itr.run(client, interaction)
    else return;

}