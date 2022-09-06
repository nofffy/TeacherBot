const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Tells you info about your discord account'),
	async execute(interaction) {
		return interaction.reply(`Your name: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
	},
};