const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  
  
    message.mentions.members.size &&
    message.mentions.members.first().id === message.author.id
  
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.member} hugged ${message.mentions.members.first()}`)
    .setColor("RED")
    .setImage("")
    message.channel.send(embed)
  
}

module.exports.help = {
  name:"hug",
  aliases: [""]
}
