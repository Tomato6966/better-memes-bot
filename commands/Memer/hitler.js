const { MessageEmbed, MessageAttachment } = require("discord.js");
const { blue } = require("../../botconfig/embed.json");

module.exports = {
  name: "hitler",
  aliases: [],
  category: "Memer",
  description: "IMAGE CMD",
  usage: "hitler [ Text ]",

  run: async (client, message, args) => {
    
    if (!args.length) return message.channel.send(new MessageEmbed().setColor("#ff000")
    .setDescription("**❌ Please provide some Text!**"))
    
    var tempmsg = await message.channel.send("<a:loading:856385452868763688>")

    var text = args.join(" ")

    client.memer.hitler(text).then(image => {

      var attachment = new MessageAttachment(image, "hitler.png");

      tempmsg.delete()
      
      const embed = new MessageEmbed()
      .setColor(blue)
      .setImage("attachment://hitler.png")
      .attachFiles(attachment)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      
      return message.channel.send(embed).catch()
      
    })
      
  }
}

 