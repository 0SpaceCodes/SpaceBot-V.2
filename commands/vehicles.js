const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  

    let embed = new Discord.MessageEmbed()

    .setTitle("🚗-Carvana-🚗")
    .addFields(
      {name: '🚘 `|` **Nisan Versan** `|` **$15,655**', value: 's!buy nisanv'},
      
      {name: '🚘 `|` **Honda Fit LX** `|` **$17,120**', value: 's!buy hondafit'},
      
      {name: '🚘 `|` **2021 Hyundai Veloster** `|` **$10,905**', value: 's!2021hyundai'},
      
      {name: '🛻 `|` **Ford F150** `|` **$29,990**', value: 's!buy f150'}
    )
      .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
      .setTimestamp()
      message.channel.send(embed)
}

module.exports.help = {
  name:"vehicles",
  aliases: ["vehs"]
}