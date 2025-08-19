const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

const Token = process.env.BOT_TOKEN;

const bot = new TelegramBot(Token, { polling: true});

bot.on("message", (msg) => {
  if (!msg.text.startsWith("/")) {
    bot.sendMessage(msg.chat.id, "You said: " + msg.text);
  }
});

bot.onText(/\/start/, (msg)=>{
    bot.sendMessage(msg.chat.id, "Hello I am a bot. How can i help you?")
})

bot.onText(/\/jokes/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    const joke = `${response.data.setup}\n😂 ${response.data.punchline}`;
    bot.sendMessage(chatId, joke);
  } catch (error) {
    console.error("Error fetching joke:", error.message);
    bot.sendMessage(chatId, "❌ Sorry, I couldn’t fetch a joke right now.");
  }
});