const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const epoch = require('../lib.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('show')
		.setDescription('Shows you the next 5 events that are coming up!'),
	async execute(interaction) {
        var data = JSON.parse (fs.readFileSync("tasks.JSON","utf-8"))
        console.log(Object.keys(data[0])[0]);
        const length = data.length;
        console.log(length);
        switch(parseInt(length)) {
            case 0:
                return interaction.reply('No planned events!');
            case 1:
                console.log(data[0].values );
                return interaction.reply(`The only event planned is ${Object.values(data[0])[0]} ${epoch.relTime(Object.keys(data[0])[0])}`);
            default:
                var string = `Event number 1 is ${Object.values(data[0])[0]} ${epoch.relTime(Object.keys(data[0])[0])}`;
                for (let step = 1; step < length; step++){
                    string += '\n';
                    string += `Event number ${step+1} is ${Object.values(data[step])[0]} ${epoch.relTime(Object.keys(data[step])[0])}`;
                }
                interaction.reply(string);                
        };
	},
};