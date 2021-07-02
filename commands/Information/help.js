const { MessageEmbed } = require("discord.js");

module.exports = {
   name: "help",
   category: "Information",
   aliases: ["h", "commandinfo", "cmds", "cmd"],
   cooldown: 4,
   usage: "help [Command]",
   description: "Returns all Commmands, or one specific command",

   run: async (client, message, args) => {


    if (args[0]) {
      const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
      if (!cmd || !cmd.name) {
        const emb = new MessageEmbed()
        .setDescription(`**❌ No information found for command \`${args[0].toLowerCase()}\` !**`)
        .setColor("#ff0000")
        return message.channel.send(emb)

      }
    
      let n = cmd.name
      const embed = new MessageEmbed()
      .setColor('#009dff')
      .setTitle(`${n[0].toUpperCase() + n.slice(1, n.length)} command!`)
      .addField('Name', cmd.name)

      if (cmd.description) embed.addField('Description', cmd.description)
      if (cmd.aliases) embed.addField('Aliases', cmd.aliases.map((a) => `\`${a}\``).join(", "))
      if (cmd.cooldown) embed.addField('Cooldown', `\`${cmd.cooldown} Seconds\``)
      if (cmd.usage) embed.addField('Usage', `\`${client.prefix}${cmd.usage}\``)

      return message.channel.send(embed)     
      
    }
    

    const embed = new MessageEmbed()
    .setColor("#009dff")
    .setTitle("Meme Bot Help")
    .setDescription(`Use \`${client.prefix}help [command]\` to get info on a specific command!`)
    .setFooter("Memer-Api.js.org ❤️", client.user.displayAvatarURL({ dynamic: true }))  
    .setTimestamp()  

    let com = {}
    for (let comm of client.commands.array()) {
      let category = comm.category || "Unknown";
      let name = comm.name;
  
      if (!com[category]) {
        com[category] = [];
      }
      com[category].push(name);
    }
    delete com["Unknown"]
    
    i = 0;
    for (const [key, value] of Object.entries(com)) {
      let c = key;
      let desc = "`" + value.join("`  `") + "`";
  
      embed.addField(`${c[0].toUpperCase() + c.slice(1, c.length).toLocaleLowerCase()}`, `**${desc}**`);
      i++
    } 


    embed.addField("Links", `**[Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) | [Support](https://discord.gg/emD44ZJaSA) | [API Documentation](https://memer-api.js.org) | [Github](https://github.com/aniket091/Meme-Bot) | By [Aniket](https://github.com/aniket091)**`)
    
    return message.channel.send({ embed: embed})

  }
}
