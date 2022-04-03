const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  

    let embed = new Discord.MessageEmbed()
    .setColor(`#060606`)

    .setTitle("🏘-Zillow-🏘")

  
    .addFields(
      {name: '🏠 `|` **Large Mansion** `|` **$1,000,000,000**', value: 's!buy lmansion'},
      
      {name: '🏠 `|` **Medium Mansion** `|` **$420,069,000**', value: 's!buy mmansion'},
      
      {name: '🏠 `|` **Small Mansion** `|` **$120,000,000**', value: 's!buy smansion'}
    )

    .addFields(
      {name: '🏠 `|` **Large House** `|` **$530,000**', value: 's!buy lhouse'},
      
      {name: '🏠 `|` **Medium House** `|` **$280,000**', value: 's!buy mhouse'},
      
      {name: '🏠 `|` **Small House** `|` **$110,000**', value: 's!buy shouse'}
    )

    .addFields(
      {name: '🏢 `|` **Apartment** | **$5,000**', value: 's!buy apartment'}
    )
      
    .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    .setTimestamp()

message.channel.send(embed)
}

module.exports.help = {
  name:"zillow",
  aliases: ["zil"]
}


//🏠       🏢       📦