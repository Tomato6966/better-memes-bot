const Discord = require("discord.js");
const Meme = require("memer-api");
const { prefix, token, api_token } = require("./botconfig/config.json");
const colors = require("colors");


const client = new Discord.Client({
  restTimeOffset: 0,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})

client.login(token);


client.memer = new Meme(api_token) // Memer API Token from - https://discord.gg/emD44ZJaSA
client.prefix = prefix;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();


["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
module.exports = client;

client.on("warn", (info) => console.log(info));
client.on("error", console.error);
