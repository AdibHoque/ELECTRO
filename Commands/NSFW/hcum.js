const {MessageEmbed} = require("discord.js")
const {get} = require('request-promise-native')
const nsfwembed = new MessageEmbed().setDescription(`<a:ElectroAdultContentWarning:709467180642730055> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**`).setColor(`#ff0000`);
module.exports = {
    name: "hcum",
    category: "NSFW",
    description: "Cummimg gifs for weebs!",
    aliases: ["hentaicum","hcumming"],
    Usage: "hbj",
    run: async (client, message, args, nsfwembed) => { 
    if (message.channel.nsfw === true) {
      let options = {
url: "https://nekos.life/api/v2/img/cum",
json: true
      }
      get(options).then(async body => {
const p = body.url.replace("https://cdn.nekos.life/","https://electro-bot.glitch.me/api/img/")
message.channel.send(p)
})
    }
    else message.channel.send(nsfwembed)
  } 
  } 