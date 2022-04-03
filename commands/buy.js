const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)
//start
    let Embed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:no_entry_sign: You Need 2000 Space Credits To Purchase Bronze VIP!`);
  
    if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased Bronze VIP For 3500 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2) 
//end
      
//start
    } else if(args[0] == 'mmansion') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 420,069,000 Space Credits to purchase a Medium Mansion`);

        if (author < 420069000) return message.channel.send(Embed2)
       
        db.fetch(`mmansion_${message.guild.id}_${user.id}`)
        db.add(`mmansion_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Medium Mansion For 420,069,000 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 420069000)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'smansion') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 120,000,000 Space Credits to purchase a Small Mansion`);

        if (author < 120000000) return message.channel.send(Embed2)
       
        db.fetch(`smansion_${message.guild.id}_${user.id}`)
        db.add(`smansion_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Small Mansion For  Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 120000000)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'lmansion') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 1,000,000,000 Space Credits to purchase a Large Mansion`);

        if (author < 1000000000) return message.channel.send(Embed2)
       
        db.fetch(`lmansion_${message.guild.id}_${user.id}`)
        db.add(`lmansion_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Large Mansion For 1,000,000,000 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1000000000)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'lhouse') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 530,000 Space Credits to purchase a Large House`);

        if (author < 530000) return message.channel.send(Embed2)
       
        db.fetch(`lhouse_${message.guild.id}_${user.id}`)
        db.add(`lhouse_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Large House For 530,000 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1000000000)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'mhouse') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 280,000 Space Credits to purchase a Medium House`);

        if (author < 280000) return message.channel.send(Embed2)
       
        db.fetch(`mhouse_${message.guild.id}_${user.id}`)
        db.add(`mhouse_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Medium House For 280,000 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 280000)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'shouse') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 110,000 Space Credits to purchase a Small House`);

        if (author < 110000) return message.channel.send(Embed2)
       
        db.fetch(`shouse_${message.guild.id}_${user.id}`)
        db.add(`shouse_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Medium House For 110,000 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 110000)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'apartment') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 5,000 Space Credits to purchase a Apartment Room`);

        if (author < 5000) return message.channel.send(Embed2)
       
        db.fetch(`apartment_${message.guild.id}_${user.id}`)
        db.add(`apartment_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Apartment Room For 5,000 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'nisanv') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 15,655 Space Credits to purchase a Nisan Virsan`);

        if (author < 15655) return message.channel.send(Embed2)
       
        db.fetch(`nisanv_${message.guild.id}_${user.id}`)
        db.add(`nisanv_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Nisan Versan For 15,655 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 15655)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'hondafit') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 17,120 Space Credits to purchase a Honda Fit LX`);

        if (author < 17120) return message.channel.send(Embed2)
       
        db.fetch(`hondafit_${message.guild.id}_${user.id}`)
        db.add(`hondafit_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Honda Fit LX For 17,120 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 17120)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == '2021hyundai') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 10,905 Space Credits to purchase a 2021 Hyundai Veloster`);

        if (author < 10905) return message.channel.send(Embed2)
       
        db.fetch(`2021hyundai_${message.guild.id}_${user.id}`)
        db.add(`2021hyundai_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a 2021 Hyundai Veloster For 10,905 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 10905)
        message.channel.send(Embed3) 
//end

//start
} else if(args[0] == 'f150') { 
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 29,990 Space Credits to purchase a Ford F150`);

        if (author < 29990) return message.channel.send(Embed2)
       
        db.fetch(`f150_${message.guild.id}_${user.id}`)
        db.add(`f150_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased a Ford F150 For 29,990 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 29990)
        message.channel.send(Embed3) 
//end

//start
    } else if(args[0] == 'bnikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 70 Space Credits to purchase some  Black Nikes`);

        if (author < 70) return message.channel.send(Embed2)
       
        db.fetch(`bnikes_${message.guild.id}_${user.id}`)
        db.add(`bnikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased Black Nikes For 70 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 70)
        message.channel.send(Embed3) 
//end

//start
    } else if(args[0] == 'wnikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 90 Space Credits to purchase some  White Nikes`);

        if (author < 90) return message.channel.send(Embed2)
       
        db.fetch(`wnikes_${message.guild.id}_${user.id}`)
        db.add(`wnikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased White Nikes For 90 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 90)
        message.channel.send(Embed3) 
//end

//start
    } else if(args[0] == 'gnikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 120 Space Credits to purchase some  Gold Nikes`);

        if (author < 120) return message.channel.send(Embed2)
       
        db.fetch(`gnikes_${message.guild.id}_${user.id}`)
        db.add(`gnikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased Gold Nikes For 120 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 120)
        message.channel.send(Embed3) 
//end

//start
    } else if(args[0] == 'rheels') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:no_entry_sign: You need 170 Space Credits to purchase some  Red High Heels`);

        if (author < 170) return message.channel.send(Embed2)
       
        db.fetch(`rheels_${message.guild.id}_${user.id}`)
        db.add(`rheels_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased Red High Heels For 170 Space Credits`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 170)
        message.channel.send(Embed3) 
//end
      
//error
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(':no_entry_sign: Please Enter an item to buy')
        message.channel.send(embed3)
    }
}
  module.exports.help = {
    name:"buy",
    aliases: [""]
  }

