const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  

    let embed = new Discord.MessageEmbed()

    .setColor(`#800080`)
    .setAuthor("👟-Famous Footwear-👟")
    .addFields(
      {name: '👟 **Black Nikes** `|` **$70**', value: 's!buy bnikes'},
      
      {name: '👟 **White Nikes** `|` **$90**', value: 'cannot buy yet'},
      
      {name: '👟 **Gold Nikes** `|` **$120**', value: 'cannot buy yet'},
      
      {name: '👠 **Red High Heels** `|` **$170**', value: 'cannot buy yet'}
    )
    .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    .setTimestamp()
    
message.channel.send(embed)
}

module.exports.help = {
  name:"famous_footwear",
  aliases: ["ff"]
}