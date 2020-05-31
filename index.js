const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzE0NDA5OTUzMDM2NzMwMzkw.Xsw_Og.bPwnwGzT4w0oebSacmQ7lBmgSqg';

const CommandsChannelId = '702086242292072479';
const PingPongChannelId = '714761505416937483';

let GreenColourHex = '#1fff0a';
let OrangeColourHex = '#FF7400';
let RedColourHex = '#FF0000';
let PurpleColourHex = '8C00FF';
let LightBlueColourHex = '#00FFEA';
let DarkBlueColourHex = '#0003FF';
let PinkColourHex = '#FB55E4';
let YellowColourHex = '#FFE700';

let ColourForEmbed = '';
let ColourForEmbedName = '';

const Prefix = '';

var Version = '1.0.0 Beta 3';

var Footer = "Woo Ping Pong Version " + Version;

bot.on('ready', () =>{
  console.log('Bot Online');
})

bot.on('message', message=>{
  let args = message.content.substring(Prefix.length).split(" ");

  switch(args[0]){
    case 'P-Help':
      break;
    case 'P-Info':
      if(message.channel.id === PingPongChannelId){
        var Info = new Discord.MessageEmbed()
        .setColor(PurpleColourHex)
        .setTitle('Ping Pong Info!')
        .addField('What Am I?', "I'm a bot to play Ping Pong!")
        .addField('How do I play?', 'For commands type: P-Help')
        .setFooter(Footer);

        message.channel.send(Info);
      }else{
        let PingCommandWrongChannel = new Discord.MessageEmbed()
        .setColor(RedColourHex)
        .setTitle('Error')
        .addField('Problem?', 'Wrong Channel')
        .addField('Where to Post?', '<#714761505416937483>')
        .setFooter(Footer);

        message.channel.send(PingCommandWrongChannel);
      }
      break;
    case 'P-Ping':
      if(message.channel.id === PingPongChannelId){
        message.reply('Pong!')
      }else{
        let PingCommandWrongChannel = new Discord.MessageEmbed()
        .setColor(RedColourHex)
        .setTitle('Error')
        .addField('Problem?', 'Wrong Channel')
        .addField('Where to Post?', '<#714761505416937483>')
        .setFooter(Footer);

        message.channel.send(PingCommandWrongChannel);
      }
      break;
    case 'P-ColourPing':
      let ColourForEmbed = '';
      let ColourForEmbedName = '';

      if(message.channel === PingPongChannelId){
        if(args[1] === 'Green'){
          ColourForEmbed = GreenColourHex;
          ColourForEmbedName = args[1];
        }
        if(args[1] === 'Yellow'){
          ColourForEmbed = YellowColourHex;
          ColourForEmbedName = args[1];
        }
        if(args[1] === 'Orange'){
          ColourForEmbed = OrangeColourHex;
          ColourForEmbedName = args[1];
        }
        if(args[1] === 'Red'){
          ColourForEmbed = RedColourHex;
          ColourForEmbedName = args[1];
        }
        if(args[1] === 'Purple'){
          ColourForEmbed = PurpleColourHex;
          ColourForEmbedName = args[1];
        }
        if(args[1] === 'Light-Blue'){
          ColourForEmbed = LightBlueColourHex;
          ColourForEmbedName = args[1];
        }
        if(args[1] === 'Dark-Blue'){
          ColourForEmbed = DarkBlueColourHex;
          ColourForEmbedName = args[1];
        }
        if(args[1] === 'Pink'){
          ColourForEmbed = PinkColourHex;
          ColourForEmbedName = args[1];
        }
  
        if(ColourForEmbedName === ''){
  
        }else{
          var PingColourEmbed = new Discord.MessageEmbed()
          .setColor(ColourForEmbed)
          .setTitle('Colour Pong!')
          .addField('Colour?', ColourForEmbedName)
          .setFooter(Footer);
  
          message.channel.send(PingColourEmbed);
        }
      }else{

      }
      break;
  }
})

bot.login(token);