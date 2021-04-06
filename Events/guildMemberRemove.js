const Config = require('./../Config.json')
const mongoose = require('mongoose');
const db = require("quick.db");

module.exports = async (client, member) => {
 let lChan = await db.fetch(`lc${member.guild.id}`);

  if (lChan == null) return;

  if (!lChan) return;
  try {
    // Background language
    let canvas = Canvas.createCanvas(1024, 450),
      ctx = canvas.getContext("2d");
    let background = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/656517276832366595/693406591197904917/GOODBYE.png"
    );
    // This uses the canvas dimensions to stretch the image onto the entire canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // Draw username
    ctx.fillStyle = "#ffffff";
    ctx.font = applyText(canvas, member.user.username, 48);
    ctx.fillText(member.user.username, canvas.width - 660, canvas.height - 248);
    // Draw server name
    ctx.font = applyText(canvas, "text", 53);
    ctx.fillText("WE WILL MISS YOU :(", canvas.width - 690, canvas.height - 65);
    // Draw discriminator
    ctx.font = "40px Sans-Serif";
    ctx.fillText(
      member.user.discriminator,
      canvas.width - 623,
      canvas.height - 178
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
    member.guild.channels.cache.get(lChan).send(
        `${member.user.username}#${member.user.discriminator} JUST LEFT THE SERVER!`,
        {
          files: [
            {
              attachment: canvas.toBuffer(),
              name: "ELECTRO-GOODBYE.png"
            }
          ]
        }
      );
  } catch (e) {
    console.log(e);
    // dont do anything if error occurs
    // if this occurs bot probably can't send images or messages
  } 
}
