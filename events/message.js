const { prefix } = require("../botconfig/config.json");
const { MessageEmbed, Collection } = require("discord.js"); 
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


module.exports = async (client, message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  let Prefix = prefix
  
  //   ||   PREFIX   &&   COMMAND   ||
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(Prefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

  if (!commandName.length && message.content.includes(client.user.id)) {
    message.reply(new MessageEmbed().setColor("#009dff").setDescription(`**My Prefix here is \`${Prefix}\`**`));
  }

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;


  //     ||   C O O L D O W N S   ||
  if (!client.cooldowns.has(command.name)) {
    client.cooldowns.set(command.name, new Collection());
  }
  
  const now = Date.now();
  const timestamps = client.cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(new MessageEmbed()
      .setDescription(`**❌ Please wait \`${timeLeft.toFixed(1)}\` more second(s) before reusing the \`${command.name}\` command!**`)
      .setColor('#ff0000'))
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  
  //     ||    E X E C U T E   ||
  try {
    command.run(client, message, args);  
  } catch (error) {
    console.error(error);
    return message.channel.send("**❌ There was some problem executing that command!**").catch(console.error);
  }  
  
}
