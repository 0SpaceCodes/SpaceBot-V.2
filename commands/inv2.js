const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");


module.exports.run = async (bot, message, args) => {
 let bnikes = await db.fetch(`bnikes_${message.guild.id}_${user.id}`)
  if(bnikes === null) bnikes = '0'

  let wnikes = await db.fetch(`wnikes_${message.guild.id}_${user.id}`)
  if(wnikes === null) wnikes = '0'

  let gnikes = await db.fetch(`gnikes_${message.guild.id}_${user.id}`)
  if(gnikes === null) gnikes = '0'

  let rheels = await db.fetch(`rheels_${message.guild.id}_${user.id}`)
  if(rheels === null) rheels = '0'

  let inv2Embed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Inventory**\n\nPocket: ${money}\nBank: ${bank}\nVIP Rank: ${vip}\n\n**Inventory 2**\n\nBlack Nikes: ${bnikes}\nWhite Nikes: ${wnikes}\nGold Nikes: ${gnikes}\nRed High Heels: ${rheels}`);
  message.channel.send(inv2Embed)
  
}

module.exports.help = {
  name:"clothsinv",
  aliases: ["clinv"]
}
