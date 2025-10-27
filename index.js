import TelegramBot from "node-telegram-bot-api";
const token = "8202845773:AAGoY85AMWsxcleq9ggBk7bhT7cvSd3hkeg";
const bot = new TelegramBot(token, { polling: true });



bot.on("message", (msg) => {
  const chat_id = msg.chat.id;
  const text = msg.text
  const first_name = msg.chat.first_name;
  const last_name = msg.chat.last_name;
  const username = msg.chat.username;

  if (text == "/start") {
      //   Xabar jo'natish
      bot.sendMessage(
        chat_id,
        `Botimizga xush kelibsiz 😄, ${first_name} 
yordam uchun /help buyruqini yuboring`
      );
  } else if (text == "/help") {
    bot.sendMessage(
        chat_id,
        `Bizning botimiz sizga turli xil mavzulardan
quiz savol testlar bera o'ladi testni boshlash
uchun /gamestart buyrukini yuboring ! `
    )

  } 
   else if (text == "/gamestart") {
    bot.sendMessage(
        chat_id,
       `Quiz mavzusini tanlang ! \n\n Matematika ➡️ /math \n\n Tarix ➡️ /history \n\n Geografiya ➡️ /geography  \n\n Ingliz til ➡️ /english`
    )

  }
  else {
    bot.sendMessage(chat_id, "Bunday buyruq mavjud emas!")
  }
  console.log(msg);
});

console.log("Bot ishga tushdi ...");

