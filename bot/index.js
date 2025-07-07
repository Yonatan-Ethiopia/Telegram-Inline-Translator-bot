require('dotenv').config()
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
require('../../bot/handlers')(bot);
require('../../bot/keyboards');
bot.launch();
console.log('Bot is running... ')