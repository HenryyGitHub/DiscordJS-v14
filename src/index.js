// Imports
const { Client, GatewayIntentBits, ActivityType } = require("discord.js")
const { config } = require("dotenv")

config()

// Variables
const token = process.env.TOKEN
const client = new Client({ intents: [ GatewayIntentBits.Guilds ] })

// Client (Ready)
client.on("ready", () => {
    console.log(`${client.user.username} is online.`)
    // client.user.setActivity("a youtube video", { type: ActivityType.Playing })
})

// Client (Login)
client.login(token)
