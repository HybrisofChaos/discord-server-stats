const discord = require('discord.js');
const client = new discord.Client();

const config = require("../config.json");

client.once('ready', () => {
    console.log('Bot Ready!');
});

client.on('message', message => {
    const author = message.author;
    const mentions = message.mentions;

    console.log(message);
});

client.login(config.token);
