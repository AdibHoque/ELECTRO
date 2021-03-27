const {MessageEmbed} = require("discord.js")
const {RedditSimple} = require('reddit-simple')
const nsfwembed = new MessageEmbed().setDescription(`<a:ElectroAdultContentWarning:709467180642730055> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**`).setColor(`#ff0000`);
module.exports = {
    name: "",
    category: "NSFW",
    description: "",
    aliases: [""],
    Usage: "",
    run: async (client, message, args, nsfwembed) => { 
    if (message.channel.nsfw === true) {
      
    }
    else message.channel.send(nsfwembed)
  } 
  } 