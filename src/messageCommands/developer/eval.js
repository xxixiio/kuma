const Discord = require("discord.js");

module.exports = {
    name: "eval",
    alias: ["e"],
    description: "Evaluate a code. (Only DEV)",
    category: "Developer",
    usage: "<code>",
    botPermissions: ["EMBED_LINKS"],
    userPermissions: [],
    cooldown: 1,
    run: async (client, message, args) => {

        if (!client.devs.includes(message.author.id)) {

            const embed = new Discord.MessageEmbed()
                .setColor(client.config.EMBEDCOLOR)
                .setAuthor({
                    name: (client.lang.DEVELOPER_EVAL.NOPERMS_author).replace("{author.username}", message.author.username),
                    iconURL: message.author.displayAvatarURL({
                        format: "png",
                        dynamic: true,
                        size: 1024
                    })
                })
                .setDescription(client.lang.DEVELOPER_EVAL.NOPERMS_description)
            return message.channel.send({
                embeds: [embed]
            })

        }

        if (!args[0]) {
            return;
        } else {

            let limit = 1900;

            try {

                let code = args.join(" ");
                let evalued = eval(code);

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