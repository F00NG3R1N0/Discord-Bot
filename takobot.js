const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const fs = require('fs');

client.commands = new Discord.Collection();

client.once('ready', () =>{
    console.log('Tako Bot is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'New Tako');

    guildMember.roles.add(welcomeRole);
})

//New Tako Welcome
client.on('messageReactionAdd', (reaction, user) =>{
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if (reaction.message.id === '849175138649374761') {
        switch (name) {
            case '✅':
                member.roles.add('848812459741282306')
                member.roles.remove('848449577991929867')
                break;

        }
    }
})

client.on('messageReactionRemove', (reaction, user) =>{
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if (reaction.message.id === '849175138649374761') {
        switch (name) {
            case '✅':
                member.roles.remove('848812459741282306')
                member.roles.add('848449577991929867')
                break;

        }
    }
})

//Games Roles
client.on('messageReactionAdd', (reaction, user) =>{
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if (reaction.message.id === '849140833269841960') {
        switch (name) {
            case '🎮':
                member.roles.add('848448913145200691')
                break;
            case '📜':
                member.roles.add('763382632653783041')
                break;
            case '🔻':
                member.roles.add('836945374445830145')
                break;
            case '🐧':
                member.roles.add('848854405977735178')
                break;
            case '🦉':
                member.roles.add('848819589530124309')
                break;
            case '🔫':
                member.roles.add('848813356869746689')
                break;
            case '🔺':
                member.roles.add('831885707319967794')
                break;
            case '💳':
                member.roles.add('848814629555929108')
                break;
            case '✨':
                member.roles.add('880125952330457118')
                break;


        }
    }
})

client.on('messageReactionRemove', (reaction, user) =>{
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if (reaction.message.id === '849140833269841960') {
        switch (name) {
            case '🎮':
                member.roles.remove('848448913145200691')
                break;
            case '📜':
                member.roles.remove('763382632653783041')
                break;
            case '🔻':
                member.roles.remove('836945374445830145')
                break;
            case '🐧':
                member.roles.remove('848854405977735178')
                break;
            case '🦉':
                member.roles.remove('848819589530124309')
                break;
            case '🔫':
                member.roles.remove('848813356869746689')
                break;
            case '🔺':
                member.roles.remove('831885707319967794')
                break;
            case '💳':
                member.roles.remove('848814629555929108')
                break;
            case '✨':
                member.roles.remove('880125952330457118')
                break;

        }
    }
})
//Link to Bot's Token
client.login(process.env.token);