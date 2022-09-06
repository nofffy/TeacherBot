const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const autoSort = require('../autoSort.js')
const epoch = require('../lib.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('event')
		.setDescription('Create event with deadline!\n[days until event] [name of event]')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('[days until event] [name of event]')
                .setRequired(true)),
	async execute(interaction) {
        let eventTime = `${interaction}`.slice(13).trim().split(' ', 1)[0];
		if (isNaN(eventTime)){
			interaction.reply(`Not a valid number: ${eventTime}`)
		} else {
		let eventName = `${interaction}`.slice(14 + eventTime.length)
		let eventEpoch = Math.floor(new Date().getTime()/1000.0) + parseInt(eventTime) * 86400
		
//		console.log(eventEpoch);
//		console.log(eventTime);
//		console.log(eventName);
		let eventObject = {
			[eventEpoch]: eventName
		};
//		console.log(eventObject);
		var data = JSON.parse (fs.readFileSync("tasks.JSON","utf-8"))
		data.push(eventObject);
		fs.writeFileSync("tasks.JSON", JSON.stringify(autoSort.sortByVal(data)));	
		console.log(data);
		interaction.reply(`Event: ${eventName} scheldued for ${epoch.longDate(eventEpoch)} which is ${epoch.relTime(eventEpoch)}`);
		};
	},
};