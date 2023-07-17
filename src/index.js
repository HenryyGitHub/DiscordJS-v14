const { Client, GatewayIntentBits, ActivityType, REST, Routes } = require("discord.js")
const { config } = require("dotenv")

config()

const commands = [
    {
        name: "ping",
        description: "Replies with Pong"
    }
]
const token = process.env.TOKEN
const clientId = process.env.CLIENT_ID
const client = new Client({ intents: [ GatewayIntentBits.Guilds ] })
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
      console.log('Started refreshing application (/) commands.');
  
      await rest.put(Routes.applicationCommands(clientId), { body: commands });
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
})();

client.on("ready", () => {
    console.log(`${client.user.username} is online.`)
    // client.user.setActivity("a youtube video", { type: ActivityType.Playing })
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand) return;

    // Ping Command:
    if (interaction.commandName === "ping") {
        await interaction.reply("Pong")
    }
})

client.login(token)