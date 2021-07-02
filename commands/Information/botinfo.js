const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const {
  duration
} = require("../../handlers/functions")
module.exports = {
  name: "botinfo",
  category: "Information",
  aliases: ["info", "stats"],
  cooldown: 4,
  usage: "botinfo",
  description: "Returns Information About the Bot!",
  run: async (client, message, args, user, text, prefix) => {
    message.channel.send(new MessageEmbed()
      .setColor(ee.color)
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle("HELP MENU 🔰 Commands")
      .addField("• General -- Stats", `\`\`\`yml\nServers: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}\`\`\``, true)
      .addField("• System -- Stats", `\`\`\`yml\nNode.js: v${process.version}\nDiscord.js: v${Discord.version}\nMemer-Api: v2.0.1\`\`\``, true)
      .addField("• Bot -- Stats", `\`\`\`yml\nBot Latency: ${Math.round(Date.now() - message.createdTimestamp)}ms\nApi Latency: ${Math.round(client.ws.ping)}ms\nRuntime: ${duration(client.uptime).split("\`").join(" ")}\`\`\``, true)
      .addField("• Developer", `\`\`\`yml\nName: Tomato#6966 [442355791412854784]\nName:ATX Ξ ShinchanOP#0001 [488225580156715008]\`\`\``)
      .addField("• Important Links", `**[Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\`|\`[Support Server](https://discord.gg/pe3V7uT)\`|\`[Website](https://milrato.eu)\`|\`[Api Documentation](https://memer-api.js.org)**`)
      .setFooter(`To see command descriptions and inforamtion, type: ${config.prefix}help [CMD NAME]`, client.user.displayAvatarURL()));
  }
}

/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
