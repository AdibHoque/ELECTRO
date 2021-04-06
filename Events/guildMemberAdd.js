const Canvas = require("canvas");
const Config = require('./../Config.json')
const mongoose = require('mongoose');
const db = require("quick.db");

const applyText = (canvas, text, defaultFontSize) => {
  const ctx = canvas.getContext("2d");
  do {
    ctx.font = `${(defaultFontSize -= 10)}px Bold`;
  } while (ctx.measureText(text).width > 600);
  return ctx.font;
}; 

module.exports = async (client, member) => {
let wChan = await db.fetch(`jc${member.guild.id}`);

  if (wChan == null) return;

  if (!wChan) return;
  try {
    // Background language
    let canvas = Canvas.createCanvas(1024, 450),
      ctx = canvas.getContext("2d");
    let background = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/656517276832366595/693406590291935252/WELCOME.png"
    );
    // This uses the canvas dimensions to stretch the image onto the entire canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // Draw username
    ctx.fillStyle = "#ffffff";
    ctx.font = applyText(canvas, member.user.username, 48);
    ctx.fillText(member.user.username, canvas.width - 660, canvas.height - 248);
    // Draw server name
    ctx.font = applyText(canvas, "text", 53);
    ctx.fillText("TO " + member.guild.name, canvas.width - 690, canvas.height - 65);
    // Draw discriminator
    ctx.font = "40px Sans-Serif";
    ctx.fillText(
      member.user.discriminator,
      canvas.width - 623,
      canvas.height - 178
    );
    // Draw number
    ctx.font = "22px Bold";
    ctx.fillText(
      " -" + member.guild.memberCount + "TH MEMBER",
      40,
      canvas.height - 50
    );
    // Draw # for discriminator
    ctx.fillStyle = "#ffbf00";
    ctx.font = "75px SketchMatch";
    ctx.fillText("#", canvas.width - 690, canvas.height - 165);

    // Pick up the pen
    ctx.beginPath();
    //Define Stroke Line
    ctx.lineWidth = 10;
    //Define Stroke Style
    ctx.strokeStyle = "#ffbf00";
    // Start the arc to form a circle
    ctx.arc(180, 225, 135, 0, Math.PI * 2, true);
    // Draw Stroke
    ctx.stroke();
    // Put the pen down
    ctx.closePath();
    // Clip off the region you drew on
    ctx.clip();

    let avatar = await Canvas.loadImage(member.user.avatarURL({format: "png", dynamic: true}));
    // Move the image downwards vertically and constrain its height to 200, so it"s a square
    ctx.drawImage(avatar, 45, 90, 270, 270);
    member.guild.channels.cache.get(wChan).send(`${member} JUST JOINED THE SERVER!`, {
      files: [
        {
          attachment: canvas.toBuffer(),
          name: "ELECTRO-WELCOME.png"
        }
      ]
    });
  } catch (e) {
    console.log(e);
    // dont do anything if error occurs
    // if this occurs bot probably can't send images or messages
  } 
}
 
