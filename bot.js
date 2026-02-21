
const io = require("socket.io-client")
const socket = io("https://rmtrollbox.xd4y.zip")

socket.emit("user joined", "chi!help", "lime", "bot", "");

socket.on("message", function(data) {
  if (data.msg == "chi!hello") {
    socket.send("Hello there!")
  }
  if (data.msg == "chi!skibiditoilet") {
   socket.send("fuck you, "+data.nick+"") 
  }
  if (data.msg == "chi!help") {
    socket.send("chi!github chi!skibiditoilet chi!hello chi!jokes chi!tayo chi!channachi chi!funfact")  
  }
  if (data.msg == "chi!tayo") {
    socket.send("wut?")
  }
  if (data.msg == "chi!jokes") {
    if (Math.random() <= 1/3) {
      socket.send(" yeah a hentai "+data.nick+" wanna tells me a joke, what do you call eggs? balls! hahahahah pls respond if you think its funny hahahah")
    } else if (Math.random() <= 1/2) {
      socket.send("'haha look at this stupid "+data.nick+" telling chinnachi for a joke' fuck you, it isnt funny but i will do it, what did chichannachi-chan wrote? nothing hahahahahahaha")
    } else {
      socket.send("wanna to see a joke? no? block me then that's your fucking problem but here we go. IF YOUR FIRED SAUCEAGE GETS HARD WHILE THEY SEE 2 WATERMELON THEY ARE FUCKING JERKING IT")
   }
  }
  if (data.msg.includes("67")) {
    socket.send("get off kiddo") 
  }
  if (data.msg.includes("six seven")) {
    socket.send("get off kiddo")
  }
  if (data.msg.includes("sprunki")) {
    socket.send("get off kiddo")
  }
  if (data.msg.includes("tung sahur")) {
    socket.send("get off kiddo") 
  }
  if (data.msg == "chi!chi") {
   socket.send("??\_")
 
  }
  if (data.msg == "chi!channachi") {
    socket.send("THANK U FOR EXPANIN MAH NAME XDDDDDDDDDDDDDDDDDDDD")  
  }
  if (data.msg == "chi!github") {
    socket.send("go to https://github.com/gooby123456780987654321123456909/chi-bot/tree/main if it is outdated then fahh")  
  }
  if (data.msg == "chi!funfact") {
    socket.send("fun fact: people who plays free fire and thinks its better is also stupid")  
  }
})
