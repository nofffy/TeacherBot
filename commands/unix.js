const { SlashCommandBuilder } = require('@discordjs/builders');
const lib = require("../lib.js")
module.exports = {
	data: new SlashCommandBuilder()
		.setName('unix')
		.setDescription('Replies with current unix time!'),
	async execute(interaction) {
		return interaction.reply(lib.getUnix() + '\n' + 'In human time that would be: ' + lib.longDate(lib.getUnix()));
	},
};