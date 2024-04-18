import { GoogleGenerativeAI } from "@google/generative-ai"

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_PUBLIC_GEMINI_API_KEY);

export default async function translateContent(content, language) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const prompt = 
  `You are a expert translator who can translate text with great accuracy and who check word to word.
   so that any meaning and essence is not lost.
   translate this content ${content} to ${language} language.
   expected output is JSON with a format.And make sure the response is parsable usin JSON.parse method
   JSON Format : {
    "translatedContent" : "translated content"
   }
   --------------------------------------------
   output examples: 
   {
    translatedContent : "hola"
   }

   response : 
  `
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
  return text;
}