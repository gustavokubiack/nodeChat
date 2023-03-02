require('dotenv').config()
const prompt = require('prompt-sync')();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-c8X6E0TZSopeTFCta4nVp9m3",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log("Welcome to the nodeChat, an app that uses OpenAI's GPT-3 to chat with you.");

async function chat(){
    while (true){
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: prompt("You: ")}],
        });

        console.log(completion.data.choices[0].message.content);    
    }

}
chat();

