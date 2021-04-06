const Config = require('./../Config.json')

module.exports = async (client, guild) => {
const channelToSend = await client.channels.fetch(Config.GUILD_ADD_REMOVE_CHANNEL);
if(!channelToSend) return console.log(`Im in a new Guild named ${guild.name}, you can set a channel to this data to be sent in config.js in GUILD_ADD_REMOVE_CHANNEL variable put the channel ID`)
const embed = new MessageEmbed()
  .setAuthor(`Guild Joined`, client.user.avatarURL())
  .addField(`Guild Name`,guild.name)
  .addField(`Guild ID`, guild.id)
  .addField(`Guild Owner`,guild.owner.user.tag)
  .setThumbnail(guild.iconURL())
  .setColor(`#ffbf00`)
  .setFooter(`Total Guilds: ${client.guilds.cache.size} | Users: ${client.users.cache.size}`)
 client.channels.cache.get(Config.GUILD_JOIN_CHANNEL).send(embed)

}
 
 
