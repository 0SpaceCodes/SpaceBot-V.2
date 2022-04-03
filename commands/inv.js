const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('s!'))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let lmansion = await db.fetch(`lmansion_${message.guild.id}_${user.id}`)
  if(lmansion === null) lmansion = '0'

  let mmansion = await db.fetch(`mmansion_${message.guild.id}_${user.id}`)
  if(mmansion === null) mmansion = '0'

  let smansion = await db.fetch(`smansion_${message.guild.id}_${user.id}`)
  if(smansion === null) smansion = '0'

  let lhouse = await db.fetch(`lhouse_${message.guild.id}_${user.id}`)
  if(lhouse === null) lhouse = '0'

  let mhouse = await db.fetch(`mhouse_${message.guild.id}_${user.id}`)
  if(mhouse === null) mhouse = '0'

  let shouse = await db.fetch(`shouse_${message.guild.id}_${user.id}`)
  if(shouse === null) shouse = '0'

  let apartment = await db.fetch(`apartment_${message.guild.id}_${user.id}`)
  if(apartment === null) apartment = '0'

  let invEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Inventory**\n\nPocket: ${money}\nBank: ${bank}\nVIP Rank: ${vip}\n\n**Inventory 1**\n\nLarge Mansions: ${lmansion}\nMedium Mansions: ${mmansion}\nSmall Mansions: ${smansion}\nLarge Houses: ${lhouse}\nMedium Houses: ${mhouse}\nSmall Houses: ${shouse}\n Apartment Rooms: ${apartment}`);
  message.channel.send(invEmbed)
  
}

module.exports.help = {
  name:"houseinv",
  aliases: ["hinv"]
}


//Make inventories for different categories of items like houses cars shoes clothing etc...