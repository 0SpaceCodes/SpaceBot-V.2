const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  

    let embed = new Discord.MessageEmbed()
    .setColor(`#060606`)

    .setTitle("💻 - Authors")
 
    .addField(`ㅤ`, "[SpaceDud](https://linktr.ee/SpaceDud)")
    .addField(` `, "[Bubbadudez](https://linktr.ee/Bubbadudez)")

    .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
  
      message.channel.send(embed)
}

module.exports.help = {
  name:"authors",
  aliases: ["aths"]
}