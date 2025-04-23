"use server"
import OpenAI from "openai";
import { Mistral } from '@mistralai/mistralai';


export async function runDeepSeek(userContent: string) {
    console.log("running deepseek")
    const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY
    });

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `You are a helpful assistant and i want to summarize this in good detailed manner => ${userContent}` }],
        model: "deepseek-chat",
    });
    const res = completion?.choices[0]?.message?.content
    console.log(res);
    return res
}

export async function runMistral(userContent: string) {
    if (!userContent) return "no user content/prompt provide"
    const apiKey = process.env.MISTRAL_API_KEY;

    const client = new Mistral({ apiKey: apiKey });

    const chatResponse = await client.chat.complete({
        model: 'mistral-small-latest',
        messages: [{
            role: 'user', content: `You are an intelligent assistant that summarizes user-written notes. Read the following note and generate a clear, concise summary in 2–3 sentences. Keep important details, remove redundancy, and rewrite in a professional tone, dont yap and answer as the first person. Note: ${userContent}`
        }],
    });
    if (!chatResponse || !chatResponse?.choices) return "Could not connect to AI"
    const res = chatResponse.choices[0].message.content
    console.log('Chat:', res);
    return res
}