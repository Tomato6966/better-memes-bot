const {
  MessageEmbed,
  MessageAttachment
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");



module.exports = {
  name: "bed",
  aliases: [""],
  category: "Memer",
  description: "IMAGE CMD",
  usage: "bed @User @User2",
  run: async (client, message, args, cmduser, text, prefix) => {
      //send loading message
      var tempmsg = await message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setAuthor("Getting Image Data..", "https://images-ext-1.discordapp.net/external/ANU162U1fDdmQhim_BcbQ3lf4dLaIQl7p0HcqzD5wJA/https/cdn.discordapp.com/emojis/756773010123522058.gif")
      );
      //get pinged user
      var user1 = message.mentions.users.first();
      //if noone got pinged, then return error
      if(!user1) return tempmsg.edit(tempmsg.embeds[0]
        .setTitle(":x: You did not ping a User!")
        .setColor("RED")
        .setDescription(`Useage: \`${prefix}bed @User @User2\``)
      ).catch(e => console.log("Couldn't delete msg, this is for preventing a bug".gray))
      //get second pinged user, if not then use cmd user
      var user2 = message.mentions.users.last() || message.author;
      if(user2.id == user1.id) user2 = message.author;
      //get avatar of the user1
      var avatar1 = user1.displayAvatarURL({ format: "png" });
      //get avatar of the user2
      var avatar2 = user2.displayAvatarURL({ format: "png" });
      //get the memer image
      client.memer.bed(avatar1, avatar2).then(image => {
        //make an attachment
        var attachment = new MessageAttachment(image, "bed.png");
        //delete old message
        tempmsg.delete();
        //send new Message
        message.channel.send(tempmsg.embeds[0]
          .setAuthor(`Meme for: ${user1.tag} | ${user2.tag}`, avatar1)
          .setImage("attachment://bed.png")
          .attachFiles(attachment)
        ).catch(e => console.log("Couldn't delete msg, this is for preventing a bug".gray))
      })
      
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
