const { MessageEmbed, MessageAttachment } = require("discord.js");
const { blue } = require("../../botconfig/embed.json");

module.exports = {
  name: "keepdistance",
  aliases: [],
  category: "Memer",
  description: "IMAGE CMD",
  usage: "keepdistance [ Text ]",

  run: async (client, message, args) => {
    
    if (!args.length) return message.channel.send(new MessageEmbed().setColor("#ff000")
    .setDescription("**❌ Please provide some Text!**"))
    
    var tempmsg = await message.channel.send("<a:loading:856385452868763688>")

    var text = args.join(" ")

    client.memer.keepdistance(text).then(image => {

      var attachment = new MessageAttachment(image, "keepdistance.png");

      tempmsg.delete()
      
      const embed = new MessageEmbed()
      .setColor(blue)
      .setImage("attachment://keepdistance.png")
      .attachFiles(attachment)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      
      return message.channel.send(embed).catch()
      
    })
      
  }
}

 