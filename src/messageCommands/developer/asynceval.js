const Discord = require("discord.js");

module.exports = {
    name: "asynceval",
    alias: ["aeval", "ae"],
    description: "Evaluate a code, you can use await. (Only DEV)",
    category: "Developer",
    usage: "<code>",
    botPermissions: ["EMBED_LINKS"],
    userPermissions: [],
    cooldown: 1,
    run: async(client, message, args) => {

        if (!client.devs.includes(message.author.id)) {

            const embed = new Discord.MessageEmbed()
                .setColor(client.config.embedColor)
                .setAuthor(`${message.author.username}, you can't use this command!`, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
                .setDescription("୨୧ :: Only my developer can use this command!")
            return message.channel.send({embeds: [embed]})

        }

        if (!args[0]) {
            return;
        } else {

            let limit = 1900;

            try {

                let code = args.join(" ");
                let evalued = await eval("(async () => { " + code + "})();");

                if (typeof evalued !== "string")
                    evalued = require("util").inspect(evalued);

                let txt = "" + evalued;

                if (txt.length > limit) {

                    console.log(txt)
                    message.channel.send(`\`\`\`js\n${txt.replace(client.config.TOKEN, "Secret Token").slice(0, limit)}\n\`\`\``);

                } else {

                    message.channel.send(`\`\`\`js\n${txt.replace(client.config.TOKEN, "Secret Token")}\n\`\`\``);

                }

            } catch (err) {
                message.reply(`an error has occurred:\n\`\`\`js\n${err}\n\`\`\``);

            }
        }

    }
}