const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.Guilds, Intents.FLAGS.GuildVoiceStates] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const channelId = '1216413426067439747';
  const newChannelName = 'test';

  const channel = client.channels.cache.get(channelId);
  if (!channel) {
    console.error(`Channel with ID ${channelId} not found.`);
    return;
  }

  channel.setName(newChannelName)
    .then(() => console.log(`Channel name changed to ${newChannelName}.`))
    .catch(console.error);
});

client.login(process.env.TOKEN);
