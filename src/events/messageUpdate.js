module.exports = (client, oldMessage, newMessage) => {

    if (!oldMessage.content) return;
    if (!newMessage.content) return;
    if (oldMessage.content == newMessage.content) return;

    client.emit("messageCreate", newMessage);

    client.editsnipe.set(oldMessage.channel.id, oldMessage);

}