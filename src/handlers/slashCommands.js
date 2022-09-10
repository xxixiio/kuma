const { SlashCommandBuilder } = require('@discordjs/builders');
const { readdirSync } = require("fs");

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

let slashCmds = [];

module.exports = async (client) => {

    readdirSync("src/commands/").forEach(dir => {
        const commands = readdirSync(`src/commands/${dir}`).filter(file => file.endsWith(".js"));
    
        for(let file of commands) {
            let command = require(`../commands/${dir}/` + file)

            const data = new SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description)

            if(command.dm) data.setDMPermission(command.dm);
            if(command.memberPermissions) data.setDefaultMemberPermissions(command.memberPermissions)

            if(command.options.length > 0) {
                for(const option of command.options) {
                    if(option.type == "string") {
                        data.addStringOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)

                        if(option.required) opt.setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "integer") {
                        data.addIntegerOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "boolean") {
                        data.addBooleanOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "user") {
                        data.addUserOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "channel") {
                        data.addChannelOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "role") {
                        data.addRoleOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "mentionable") {
                        data.addMentionableOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "number") {
                        data.addNumberOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    } else if (option.type == "attachment") {
                        data.addAttachmentOption(opt => { opt.setName(option.name)
                        .setDescription(option.description)
                        .setRequired(option.required)
                        
                        if (option.choices && option.choices.length > 0) {
                            for(let choices of option.choices) {
                                opt.addChoices({ name: choices.name, value: choices.value})
                            }
                        }

                        return opt;
                    })
                    }
                }
            }

            if(command.subCommands && command.subCommands.length > 0) {

                for(let subcommand of command.subCommands) {
                    data.addSubcommand(cmd => {
                        cmd.setName(subcommand.name)
                        .setDescription(subcommand.description)

                    if(subcommand.options.length > 0) {
                        for(const option of subcommand.options) {
                            if(option.type == "string") {
                                cmd.addStringOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "integer") {
                                cmd.addIntegerOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "boolean") {
                                cmd.addBooleanOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "user") {
                                cmd.addUserOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "channel") {
                                cmd.addChannelOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "role") {
                                cmd.addRoleOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "mentionable") {
                                cmd.addMentionableOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "number") {
                                cmd.addNumberOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            } else if (option.type == "attachment") {
                                cmd.addAttachmentOption(opt => { opt.setName(option.name)
                                .setDescription(option.description)
                                .setRequired(option.required)
                                
                                if (option.choices && option.choices.length > 0) {
                                    for(let choices of option.choices) {
                                        opt.addChoices({ name: choices.name, value: choices.value})
                                    }
                                }

                                return opt;
                            })
                            }
                            
                            console.log(cmd)

                        }
                    } 

                    return cmd;

                });
                    
            }
        }
    
            client.slashCommands.set(data.name, command)
            slashCmds.push(data.toJSON())

        }
    
    });

    const rest = new REST({
        version: '9'
    }).setToken(client.config.TOKEN);
    
    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');
    
            await rest.put(
                Routes.applicationGuildCommands("714816115628572734", "744196008686256140"), {
                    body: slashCmds
                },
            );
    
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();

}