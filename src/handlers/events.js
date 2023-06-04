const { readdirSync } = require("fs");

module.exports = async (client) => {
 
    for (const file of readdirSync('src/events/')) {

        if (file.endsWith(".js")) {
    
            let fileName = file.substring(0, file.length - 3);
    
            let fileContents = require(`../events/${file}`);
    
            client.on(fileName, fileContents.bind(null, client));
    
            delete require.cache[require.resolve(`../events/${file}`)];
        }
    }

}