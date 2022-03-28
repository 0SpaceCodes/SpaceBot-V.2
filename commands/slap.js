const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  
  
    message.mentions.members.size &&
    message.mentions.members.first().id === message.author.id
  
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.member} slapped ${message.mentions.members.first()}`)
    .setColor("RED")
    .setImage("https://media.discordapp.net/attachments/862733310018584576/957387429038399498/slapping.gif")
    message.channel.send(embed)
  
}

module.exports.help = {
  name:"slap",
  aliases: [""]
}
