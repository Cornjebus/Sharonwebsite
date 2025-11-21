import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const model = "gemini-2.5-flash";
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, but I'm having trouble connecting right now. Please try again later or use the contact form.";
  }
};