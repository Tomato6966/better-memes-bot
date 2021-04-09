const {
  MessageEmbed,
  MessageAttachment
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");

const Meme = require("memer-api");
const memer = new Meme();

module.exports = {
  name: "jail",
  aliases: [""],
  category: "Memer",
  description: "IMAGE CMD",
  usage: "jail @User",
  run: async (client, message, args, cmduser, text, prefix) => {
      //send loading message
      var tempmsg = await message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setAuthor("Getting Image Data..", "https://images-ext-1.discordapp.net/external/ANU162U1fDdmQhim_BcbQ3lf4dLaIQl7p0HcqzD5wJA/https/cdn.discordapp.com/emojis/756773010123522058.gif")
      );
      //get pinged user, if not then use cmd user
      var user = message.mentions.users.first() || message.author;
      //get avatar of the user
      var avatar = user.displayAvatarURL({ format: "png" });
      //get the memer image
      memer.jail(avatar).then(image => {
        //make an attachment
        var attachment = new MessageAttachment(image, "jail.png");
        //delete old message
        tempmsg.delete();
        //send new Message
        message.channel.send(tempmsg.embeds[0]
          .setAuthor(`Meme for: ${user.tag}`, avatar)
          .setImage("attachment://jail.png")
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
