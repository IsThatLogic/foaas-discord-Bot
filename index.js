const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('dotenv').config();
const axios = require('axios');


const fuck = require('./src/FuckResponse.js');
const API = require('./src/API');

client.on('ready', ready);
function ready()
{
	console.log("Let's fucking go");
}

client.on('messageCreate', messageCreate);
async function messageCreate(message)
{
	const args = message.content.trim().split(/ +/g);
	const cmd = args[0].toLowerCase();
	if(message.author.bot)
		return;
	if(cmd == "!fuck")
	{
		if(args[2])
		{
			message.reply("Usage: `!fuck @target`")
				.then(msg => {
					setTimeout(() => msg.delete(), 5000)
				  })
				.catch(console.error);
		}
		if(!args[1])
		{
			let FuckList = fuck.FuckList;
			let randomNumber = Math.floor(Math.random()*FuckList.length);
			let foaasAPI = await new API();

			try {
				const response = await foaasAPI.foaasRequest(
					FuckList[randomNumber]);
				message.channel.send(response[0]);
				message.delete();
			}
			catch (e){
				console.log("error" + e);
			}
		}
		if(args[1])
		{
			let FuckListTarget = fuck.FuckListTarget;
			let randomNumber = Math.floor(Math.random()*FuckListTarget.length);
			let foaasAPI = await new API();
			let buffer = args[1];
			if(args[1].includes("@everyone") || args[1].includes("@here"))
			{
				buffer = args[1].replace("@", "");
			}
			try {
				const response = await foaasAPI.foaasRequestTarget(
						FuckListTarget[randomNumber],
						buffer);
				message.channel.send(response[0]);
				message.delete();
			}
			catch (e){
				console.log("error" + e);
			}
		}
	}
}

client.login(process.env.BOT_TOKEN);