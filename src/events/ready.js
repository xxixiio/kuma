const mongoose = require("mongoose");

module.exports = async (client) => {

    console.log("Hello World.")
    console.log(`Prefix: ${client.prefix}`)

    mongoose.connect(client.config.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected with MongoDB") 
    })

}