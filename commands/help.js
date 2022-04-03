const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!')) return;

    let embed = new Discord.MessageEmbed()
    .setColor(`#060606`)

    .setAuthor("📚 - SpaceBot Help")
    
    .setThumbnail(bot.user.displayAvatarURL())   

    .setDescription (`My Prefix Is - \`s!\``)

    .addField(`ㅤ`, "👔 `|` Work")

    .addField(`ㅤ`, "🐟 `|` Fish")
      
    .addField(`ㅤ`, "😈 `|` Rob")

    .addField(`ㅤ`, "🏦 `|` Balance")

    .addField(`ㅤ`, "☀️ `|` Daily")

    .addField(`ㅤ`, "📅 `|` Weekly")

    .addField(`ㅤ`, "💳 `|` Store")

    .addField(`ㅤ`, "💰 `|` Buy")

    .addField(`ㅤ`, "💵 `|` Pay")

    .addField(`ㅤ`, "🥺 `|` Beg")

    .addField(`ㅤ`, "🏧 `|` Deposit")

    .addField(`ㅤ`, "💳 `|` Withdraw")

    .addField(`ㅤ`, "📶 `|` Leaderboard")

    .addField(`ㅤ`, "🎲 `|` Roulette")

    .addField(`ㅤ`, "🎰 `|` slots")

    .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    .setTimestamp()
message.channel.send(embed)
}

module.exports.help = {
  name:"help",
  aliases: [""]
}