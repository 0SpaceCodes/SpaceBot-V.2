//const db = require('quick.db')
//const Discord = require('discord.js')
//const ms = require("parse-ms");

//module.exports.run = async (bot, message, args) => {
//    if(!message.content.startsWith('s!'))return;  
//
//    let user = message.author;
//    let author = await //db.fetch(`fish_${message.guild.id}_${user.id}`)

//    let timeout = 300000;
    
//    if (author !== null && timeout - (Date.now() - author) > 0) {
//        let time = ms(timeout - (Date.now() - author));
    
//        let time = ms(timeout - (Date.now() - author));
    
//        let timeEmbed = new Discord.MessageEmbed()
//         .setColor("#00FF00")
//         .setTitle(`❌ | You Have Already Fished Recently!\n\nTry Again In ${time.minutes}m ${time.seconds}s `);
      
//         message.channel.send(timeEmbed)
//      } else {

//        let fish = ['Tuna', 'Catfish', 'Blue Gill', 'Sun Fish', 'Blue Sun Fish', 'Sperm Whale']

//        let fish_type = Math.floor((Math.random() * fish.length));
//        let amount = Math.floor(Math.random() * 80) + 1;

//        let embed1 = new Discord.MessageEmbed()
//        .setColor("00FF00")
//        .setTitle(`✅ | You Fished And Caught A ${fish_type[result]}!\n\nYou Sold It For ${amount} Space Credits!`)
//        .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
//        message.channel.send(embed1)
        
//        db.add(`money_${message.guild.id}_${user.id}`, amount)
//        db.set(`fish_${message.guild.id}_${user.id}`, Date.now())
//    };
//}

//module.exports.help = {
//  name:"fish",
//  aliases: ["f"]
//}