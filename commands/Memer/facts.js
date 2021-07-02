const { MessageEmbed, MessageAttachment } = require("discord.js");
const { blue } = require("../../botconfig/embed.json");

module.exports = {
  name: "facts",
  aliases: [],
  category: "Memer",
  description: "IMAGE CMD",
  usage: "facts [ Text ]",

  run: async (client, message, args) => {
    
    if (!args.length) return message.channel.send(new MessageEmbed().setColor("#ff000")
    .setDescription("**❌ Please provide some Text!**"))
    
    var tempmsg = await message.channel.send("<a:loading:856385452868763688>")

    var text = args.join(" ")

    client.memer.facts(text).then(image => {

      var attachment = new MessageAttachment(image, "facts.png");

      tempmsg.delete()
      
      const embed = new MessageEmbed()
      .setColor(blue)
      .setImage("attachment://facts.png")
      .attachFiles(attachment)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      
      return message.channel.send(embed).catch()
      
    })
      
  }
}

 