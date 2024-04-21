import { GoogleGenerativeAI, HarmCategory,
  HarmBlockThreshold } from "@google/generative-ai"

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_PUBLIC_GEMINI_API_KEY);

export async function translateContent(content, language) {
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

export async function translateInnerHTML(content, language) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" , generationConfig: {maxOutputTokens : 100000}});
  const prompt = 
  `Traslate the content inside the html content to ${language},
   do not change html realted tags and property and only change the content inside and make sure the response is a correct html and make sure and tag are complete 
   html : ${content}
   response : 
---------------------------------------------
example: 
  html: <div>Hi how are are you</div><div>I am super fine</div>
  response : <div>[translated content]<div>[translatedContent]</div>
  ----------------------------------------------

  `
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export async function translatePageContent(content, language) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const prompt = 
  `You are a expert translator who can translate text with great accuracy and who check word to word.
   so that any meaning and essence is not lost.
   translate this content ${content} to ${language} language.
   response : 
  `
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export default {translateContent, translateInnerHTML, translatePageContent}