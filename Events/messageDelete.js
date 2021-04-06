const Config = require('./../Config.json')
const mongoose = require('mongoose');
const db = require("quick.db");
const lo = require("./Mongodb/logchannel")
 
module.exports = async (client, message) => {
 if (message.author.bot) return;
  db.set(`snipe${message.channel.id}`, {
    mc: message.content,
    sa: message.author.username + `#` + message.author.discriminator,
    saav: message.author.avatarURL(),
    time: `${message.createdAt.toLocaleString()} GMT+0000`
  });
  const res =  await lo.findOne({name: "logchannel", preid: message.guild.id})
  let lc = res.logchannel 
if(res.logchannel) {
  const embed = new MessageEmbed()
.setTitle(`MESSAGE DELETED`)
.addField(`Message Content`,message.content)
.addField(`Message Author`,message.author.tag)
.addField(`Message Channel`, "<#"+message.channel.id+">")
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(`MESSAGE DELETED`)
.setColor(`#ffbf00`)
message.guild.channels.cache.get(lc).send(embed)
}
else return; 
}
