require('dotenv').config()
const prompt = require('prompt-sync')();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-c8X6E0TZSopeTFCta4nVp9m3",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log("Welcome to the nodeChat, an app that uses OpenAI's GPT-3 to chat with you. If you want to exit the chat, type 'exit' or 'q'.");


chat = async () => {
    const messagesArray = [];
    while (true){
        const userInput = prompt("You: ");
        messagesArray.push({role: "user", content: userInput});
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messagesArray,
        });
        messagesArray.push({role: "assistant", content: completion.data.choices[0].message.content});
        console.log("Bot:", completion.data.choices[0].message.content);  
        if (userInput === "exit" || userInput === 'q'){
            process.exit();
        }  
    }

}

chat();