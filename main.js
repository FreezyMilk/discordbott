const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'a!';

client.once('ready', () => {
    console.log('Atlas Industries is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'group'){
        message.channel.send('https://www.roblox.com/groups/5800476/Atlas-Hotels#!/about');
    } else if (command == 'tiktok'){
        message.channel.send('https://vm.tiktok.com/JLE7mPu/');
    } else if (command == 'applyreception'){
        message.channel.send('https://forms.gle/3tahDoVcB6Ft5isz8');
    }
});

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "❃⎥joins-logs");
    if(!channel) return;

    channel.send(`**Welcome to Atlas Hotels Industries ${member}!** 
    
We are beyond grateful that you decided to join us on this amazing journey. Please be sure to read our rules before doing anything in the server. We wish you the best experience here at Atlas! If you have any concerns, please contact a member of the Senior Leadership Team, they'll be happy to help you about it!`)
});

const fs = require('fs');



client.login(process.env.token);