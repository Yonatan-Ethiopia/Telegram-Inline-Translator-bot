require('dotenv').config()
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
require('./handlers/commands')(bot);
require('./handlers/inline')(bot);
bot.launch();
console.log('Bot is running... ')