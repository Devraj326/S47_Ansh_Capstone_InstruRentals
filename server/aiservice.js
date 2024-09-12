import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function generateContent(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export default generateContent;
