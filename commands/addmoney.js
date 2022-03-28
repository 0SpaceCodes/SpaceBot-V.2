const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let ownerID = '730161703177814027';
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:white_check_mark: Added ${args[1]} Coins!\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
  name:"add",
  aliases: ["am"]
}
