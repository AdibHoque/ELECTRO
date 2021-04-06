const {get} = require("request-promise-native");

 module.exports = (client) => { 
const ty = [
    'cum_jpg',
    'pussy_jpg',
    'pwankg',
    'tits',
    'boobs',
    'bj',
    'cum', 
    'blowjob'
    ]
  var types = ty[Math.round(Math.random() * (ty.length - 1))];
  let options = {
url: "https://nekos.life/api/v2/img/"+types,
json: true
}
get(options).then(async body => {
const p = body.url.replace("https://cdn.nekos.life/","https://electro-bot.glitch.me/api/img/")
const c1 = client.channels.cache.get("738741744602054657")
const c2 = client.channels.cache.get("738787404931923989")
if(c1) c1.send(p)
if(c2) c2.send(p)
}
    ) 
 }
