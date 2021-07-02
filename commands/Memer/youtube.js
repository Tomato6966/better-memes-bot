const { MessageEmbed, MessageAttachment } = require("discord.js");
const { blue } = require("../../botconfig/embed.json");

module.exports = {
  name: "youtube",
  aliases: [],
  category: "Memer",
  description: "IMAGE CMD",
  usage: "youtube @User [ Text ]",

  run: async (client, message, args) => {
    
    if (!args.length) return message.channel.send(new MessageEmbed().setColor("#ff000")
    .setDescription("**❌ Please provide some Text!**"))
    
    var tempmsg = await message.channel.send("<a:loading:856385452868763688>")
    
    var user = message.mentions.users.first();
    if(user) args.shift();
    else user = message.author;

    var avatar = user.displayAvatarURL({ format: "png" });


    var text = args.join(" ")

    if (!text) {
      tempmsg.delete();
      return message.channel.send(new MessageEmbed().setColor("#ff595e")
      .setDescription("**<:x2:819613332892942347> Please provide some Text!**"))  
    }

    client.memer.youtube(avatar, user.username, text).then(image => {

      var attachment = new MessageAttachment(image, "youtube.png");

      tempmsg.delete()
      
      const embed = new MessageEmbed()
      .setColor(blue)
      .setImage("attachment://youtube.png")
      .attachFiles(attachment)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      
      return message.channel.send(embed).catch()
      
    })
      
  }
}
