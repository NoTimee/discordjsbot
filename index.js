const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //V13

client.on('ready', () => {
  console.log(`${client.user.tag}`);
});
//^^ when Discord's client log+in.

client.login('token');
