const Config = require('./../Config.json')

module.exports = async (client, message) => {
if (message.author.bot) return;
  if (
    message.content.split(" ")[0] == "e!eval" &&
    message.author.id === Config.OWNER_ID
  ) {
    try {
      const code = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  if (message.channel.name === "chatbot" && !message.author.bot) {
    message.channel.startTyping();
    const reply = await ai.getReply(message.content);
    message.channel.stopTyping();
    var Google = ["#0F9D58", "#DB4437", "#4285F4", "#FFBF00"];
    var gcolor = Google[Math.round(Math.random() * (Google.length - 1))];
    const embed = new MessageEmbed()
      .setColor(`#ffbf00`)
      .setFooter(
        `${reply}`,
        "https://cdn.discordapp.com/emojis/646994210939076618.gif"
      );
    message.channel.send(`${message.author}`, embed);
  }
  const res = await pre.findOne({name: "prefix", preid: message.guild.id})
  let prefix = res ? res.prefix : "e!";
 // const nsfwembed = new MessageEmbed().setDescription(`<a:ElectroAdultContentWarning:709467180642730055> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**`).setColor(`#ff0000`);

  if (message.content === "<@629323586930212884>") {
    const embed = new MessageEmbed()
      .setTitle(`ELECTRO Tips`)
      .setDescription(
        `To learn how to use the bot, please use the \`${prefix}help\` command.`
      )
      .addField(
        `Current Prefix`,
        `The current prefix in this server is \`${prefix}\`.`
      )
      .addField(
        `Invite The Bot`,
        `https://discord.com/api/oauth2/authorize?client_id=629323586930212884&permissions=2146827775&scope=bot`
      )
      .addField(`Support Server`, `https://discord.gg/dAggRh9`)
      .setColor(`#ffbf00`)
      .setFooter(`Contact Us: electrobot6969@gmail.com`);
    message.channel.send(embed);
  }
  /*if (message.author.id == "496978159724396545" && message.guild.id == "716668695681695767") {
      message.react("⭐")
    }*/
  await db.add(`tms${message.channel.id}`,1)
  let totalMessagesSent = await db.get(`tms${message.channel.id}`);
	if ((Math.floor(Math.random() * 50 + 50) < totalMessagesSent)) {
		if (!message.channel.permissionsFor(message.guild.me).has('ATTACH_FILES')) return;
		if (!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return;
		await dropWallet(prefix, message.channel, message.author);
	} 
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const commands = args.shift().toLowerCase();

  var cmd = client.commands.get(commands);

  if (commands.length === 0) return;

  if (!cmd) cmd = client.commands.get(client.aliases.get(commands));
  try {
    cmd.run(client, message, args, prefix);
    const userResult = await u.findOne({name: "users", preid: message.author.id})
if(!userResult) {
  let duck = new u({
            _id: new mongoose.Types.ObjectId(),
            name: "users",
            preid: message.author.id,
            usertag: message.author.tag,
            cmdused: 1
          })
  duck.save().catch(console.error)
}
if(userResult) {
    await require('./Mongodb/user.js').updateOne({preid: message.author.id}, {$inc: {cmdused: 1},usertag:message.author.tag});
}
    client.guilds.cache.get("646262196975960074").channels.cache.get("739788363510579290").send(new MessageEmbed().setTitle(message.guild.name).setAuthor(message.member.user.tag, message.member.user.avatarURL({"size":512,"format": "png", "dynamic": true})).setDescription(`Used \`${cmd.name}\` command in ${message.channel.name}\n\`\`\`${prefix}${cmd.name} ${args}\`\`\``).setThumbnail(message.guild.iconURL({"size":512,"format":"png", "dynamic":true})).setColor("#ffbf00"))
  } catch (err) {
    console.log(`An error occured. ${err}`);
  }
}
