require("http").createServer((_, r) => r.end("SpaceBot Is Now Online")).listen(8080)

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Space Bot Is Now Online!'));

app.listen(port, () => console.log(`Server Started At - http://localhost:${port}`));

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("[+] ERROR | No Commands Found!");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})
bot.on("ready", async () => {

  console.log(`${bot.user.username} Is Online On ${bot.guilds.cache.size} Servers!`);

  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;
        
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )})

bot.login(process.env.DISCORD_TOKEN);