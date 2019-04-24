const { Client, Attachment, RichEmbed } = require('discord.js');
const client = new Client();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const randomArraySelector = (arraySize) => {
    return Math.floor(Math.random() * (arraySize));
};

const nowQuotes = [
    'Do you look like you’re malnourished, {USER}?',
    '{USER}, there is no protein in mashed potato.',
    'I\'m sending you to see da derepist.',
    'How is your eating habits, {USER}?',
    'You have 700 pound of food in you, {USER}.',
    'Here come the tear again.',
    'Tirty pound, tirty day.',
    '{USER}, you weigh 500 pound. You not gonna starve.',
    'How is your eating habits, {USER}?',
    '{USER}, who is enabling you?',
    '{USER}, instead of your sister you brought your enabler.',
];

const nowQuoteSelector = (user, quote) => {
    return user ? nowQuotes[quote].replace('{USER}', user) : nowQuotes[quote]
};

const reactToWordsRegex = /^(thanos|fruit soup)$/;

client.on('message', message => {
    if (message.author.bot) return;
//    if (message.content.indexOf('!') !== 0) return;
    switch(message.content) {
        case '!drnow':
            message.channel.send(`${nowQuoteSelector(message.author.username, randomArraySelector(nowQuotes.length))}`).then(message.delete());
            break;
        case '!nutella':
            message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/emojis/429137464683134977.png")).then(message.delete());
            break;
        case '!smugpepe':
            message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/emojis/467434074676658177.png")).then(message.delete());
            break;
        case '!ride':
            message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/emojis/476625692700835850.png")).then(message.delete());
            break;
        case '!gravy':
            message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/emojis/504829066214375444.png")).then(message.delete());
            break;
        case '!pepegrin':
            message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/emojis/470111813250449408.png")).then(message.delete());
            break;
        case '!tony':
            message.channel.send(new RichEmbed().setFooter(message.author.username).setImage(process.env.TONYURL ? process.env.TONYURL : 'https://cdn.discordapp.com/emojis/558168330633216000.png')).then(message.delete());
            break;
        case '!milkman':
            message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/attachments/210951354972110848/568220721554259968/scheer.png")).then(message.delete());
            break;
	case '!flatpepe':
	    message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/attachments/210951354972110848/570106339611639840/1555702636836.png")).then(message.delete());
	case '!coolpepe':
	   message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/emojis/470136383500058636.png")).then(message.delete());
        case '!kyle':
	   message.channel.send(new RichEmbed().setFooter(message.author.username).setImage("https://cdn.discordapp.com/emojis/467441714018123776.png")).then(message.delete());
	case '!test':
            break;
    }
    if (message.content.split(' ')[0] === '!bfkd') {
        axios(`https://api.battlefieldtracker.com/api/v1/bfv/profile/origin/${message.content.split(' ')[1]}`)
        .then(response =>
            message.channel.send(`${message.content.split(' ')[1]} has a k/d of **${Math.floor(response.data.data.stats.kdRatio.value * 100) / 100}**`)
        )
    }
    if (message.content.toLocaleLowerCase().match(reactToWordsRegex)) {
        message.react('467437358896250931');
    }
});

client.on('error', console.error);

client.login(process.env.DISCORD_AUTH_TOKEN);

client.once('ready', () => {
    console.log('Connected to Discord');
});
