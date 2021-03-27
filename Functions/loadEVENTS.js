const fs = require("fs"); 

module.exports = (client) => {
 fs.readdir("./Events/", (err, files) => {
  if (err) return console.log(err);
  files.forEach((f) => {
    const event = require(`./events/${f}`);
    let eventName = f.split(".")[0];
    console.log(`Event Loaded: ${f}`);
    client.on(eventName, event.bind(null, client));
  });
}); 
}
