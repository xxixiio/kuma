const {
    model,
    Schema
} = require("mongoose");

const guildSchema = require("../schemas/guild")

module.exports.fetchGuild = async function(key) {

    let guildDB = await guildSchema.findOne({ id: key });

    if(guildDB){
        return guildDB;
    }

}