const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sandy! hey!') {
    msg.channel.send('Hello, Singularity.');
  }
});

client.on('message', msg => {
  if (msg.content === 'ping!') {
    msg.channel.send('Pong? ...Singularity, I do not understand the point of this.');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! make me coffee!') {
    msg.channel.send('Tch... No "please"? Well, whatever. How would you like it? *[:coffee: = black, :milk: = cream and sugar, :beer: = special holiday drink. (;3) You can tell the bot what you would like from those options.]*');
 
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! make me a coffee!') {
    msg.channel.send('Tch... No "please"? Well, whatever. How would you like it? *[:coffee: = black, :milk: = cream and sugar, :beer: = special holiday drink. (;3) You can tell the bot what you would like from those options.]*');
 
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! make me some coffee!') {
    msg.channel.send('Tch... No "please"? Well, whatever. How would you like it? *[:coffee: = black, :milk: = cream and sugar, :beer: = special holiday drink. (;3) You can tell the bot what you would like from those options.]*');
 
  }
});

client.on('message', msg => {
  if (msg.content === 'if i scream while dying, im sure sandalphon will save me!') {
    msg.channel.send('Singularity, I would rather save my time and effort if you are strong enough to heal yourself. But... I may as well be at your side to save you anyway. *[He gives a slight pout, something similar to what he gave Belial that one time, and avoids eye contact. Tsundere, much?]*');
  }
});

client.on('message', msg => {
	if (msg.content === 'sandy! i want my coffee black, please!') {
	   msg.channel.send('Right, of course, Singularity. *[Moments of silence pass as he prepares your coffee. He pours it into a very pretty porcelian cup after he filters it, handing it to you with care.]* I hope you enjoy it. :gift_heart:');
		
   }
});

client.on('message', msg => {
	if (msg.content === 'sandy! hey, how about a special holiday drink? think of... those starbucks pumpkin spice lattes!') {
	   msg.channel.send('Singularity, this isnt a Starbucks. But... I can *try* to make one, if you would like me to. *[And so, he sets to trying to make one, and after a few hours of doki-dokis and starting over a few times, Sandalphon approaches you with a home-made pumpkin spice latte. Complete with whipped cream, which he had to fight Belial to get, by the way. ~~Bastard.~~ He hands you the cup, wearing an exhausted expression and a small smile.]* Here you go, Singularity. Tell me how it is, please. :gift_heart:');
		
   }
});

client.on('message', msg => {
	if (msg.content === 'sandy! i want my coffee with cream and sugar, if it isnt too much of a trouble!') {
	   msg.channel.send('Of course, Singularity! *[Moments of comfortable silence pass as he prepares your coffee with a small grin on his face. He pours it into a very pretty porcelian-like cup, presumably becuase the Singularity seems so childish and clumsy at times. After he filters it, he attempts to mimic how you prepare your coffee with the exact measurements of cream and sugar. Afterwards, he hands the cup to you with lots of love and care.]* I hope you like it. :gift_heart:');
		
   }
});

client.on('message', msg => {
  if (msg.content === 'sandy! yo, whats the mf tea sis??') {
    msg.channel.send('*[He sighs. Somewhere, in the faint distance on the Grandcypher, you can hear Gran reciting the famous tea tiktok.]* Kafei, you just... You just asked me for *coffee*, now you want tea? ...Alright. *[He leaves the kitchen, then returns with a bottle of tea that he most likely took from Gran, slamming it down on the counter in front of you and reciting the tiktok in a monotone voice. He even taps his fingers in unison to when the appropriate taps in the tiktok are!]* Kafei, heres-- the mother fucking-- TEA.');
  }
})

client.on('message', msg => {
  if (msg.content === 'sandy! what are your thoughts on thotpom?') {
    msg.channel.send('Fuck thotpom. *[He quickly snaps at you, slurring his words slightly. You have a small feeling his coffee may have been spiked...]*');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! quick, protect me! the ultimate sniper is nearby!') {
    msg.channel.send('Singularity! *[He attempts to protect you, but as he is a bot and technically a hologram due to being a virtual bot, it does nothing. The ultimate sniper kills you and leaves him to mourn your dead body.]* :broken_heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy!') {
    msg.channel.send('Yes, Singularity?');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! i love you') {
    msg.channel.send('O-Oh... *[He hides his face in his hands, blushing hard. After a few moments, he quietly responds.]* I... I love you too, Singularity.');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! ily') {
    msg.channel.send('O-Oh... *[He hides his face in his hands, blushing hard. After a few moments, he quietly responds.]* I... I love you too, Singularity.');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! i love you!') {
    msg.channel.send('O-Oh... *[He hides his face in his hands, blushing hard. After a few moments, he quietly responds.]* I... I love you too, Singularity.');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! ily!') {
    msg.channel.send('O-Oh... *[He hides his face in his hands, blushing hard. After a few moments, he quietly responds.]* I... I love you too, Singularity.');
  }
});

client.on('message', msg => {
  if (msg.content === 'sandy! help!') {
    msg.channel.send('https://sandalphonbothelp.carrd.co/');
  }
});

client.login(auth.token);