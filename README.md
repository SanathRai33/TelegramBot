# 🤖 Telegram Bot

A simple **Telegram Bot** built with **Node.js** using the `node-telegram-bot-api` library.  
This bot can **reply to user messages**, greet users on `/start`, and even tell **random jokes** from an external API.  

---

## 🚀 Features
- 👋 Responds to `/start` with a greeting  
- 💬 Echoes back any plain message sent (non-command messages)  
- 😂 Fetches and sends a **random joke** using [Official Joke API](https://github.com/15Dkatz/official_joke_api) when `/jokes` is typed  
- ❌ Handles errors gracefully if API fails  

---

## 🛠️ Tech Stack
- **Node.js** – Runtime environment  
- **node-telegram-bot-api** – Telegram Bot API wrapper  
- **dotenv** – For environment variable management  
- **axios** – For making API requests  

---

## 📂 Project Structure
```

TelegramBot/
│-- index.js        # Main bot logic
│-- package.json    # Node.js dependencies and scripts
│-- .env            # Environment variables (Bot token)
└-- README.md       # Documentation

````

---

## ⚡ Setup & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/SanathRai33/TelegramBot.git
   ````

2. Navigate into the project:

   ```bash
   cd TelegramBot
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Create a `.env` file in the root folder and add your bot token:

   ```
   BOT_TOKEN=your-telegram-bot-token-here
   ```
5. Start the bot:

   ```bash
   node index.js
   ```

---

## 🎯 Usage

* In your **Telegram app**, search for your bot (created via [BotFather](https://core.telegram.org/bots#botfather)) and start a chat.
* Commands available:

  * `/start` → Greets the user
  * `/jokes` → Fetches a random joke
  * Any plain message → Bot echoes back with `"You said: ..."`

---

## 🔮 Future Enhancements

* Add **more fun commands** (weather, news, quotes, etc.)
* Add **buttons & menus** for better interaction
* Add **database support** to save user interactions
* Deploy bot on **Heroku / Railway / Render**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📜 License

This project is licensed under the **MIT License**.

---

### 👨‍💻 Author

**Sanath Rai**
📧 [sanathrai03@gmail.com](mailto:sanathrai03@gmail.com)
🌐 [GitHub](https://github.com/SanathRai33)
