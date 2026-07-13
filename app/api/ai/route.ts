import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY




export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    
    var input = message
  await const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
    const interaction = ai.interactions.create({
    model: 'gemini-3.5-flash',
    contents: input,
  })
  NextResponse.json({ response: interaction });
  }catch (error: any) {
    console.error("API Error:", error );
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }

  
  
  //   // Use a valid model name like 'gemini-1.5-flash'
  //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  //   const result = await model.generateContent(message);
  //   const response = await result.response;
  //   const text = response.text();

  //   return NextResponse.json({ reply: text });

// }

}

// import { GoogleGenerativeAI } from "@google/generative-ai";




//Vertex ai
// import { NextResponse } from "next/server";
// import { VertexAI } from '@google-cloud/vertexai';

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
//     // const model = genAI.getGenerativeModel({ model: "projects/248386695235/locations/us-central1/publishers/google/models/gemini-1.5-flash" });
// const vertexAI = new VertexAI({
//   project: 'gen-lang-client-0765365189', 
//   location: 'us-central1'     
// });
//     // const result = await model.generateContent(message);
//     // const response = await result.response;

//     // Initialize the model
// const model = vertexAI.getGenerativeModel({
//   model: 'Gemini 2.5 Flash Lite',
// });

// // Use it
// const result = await model.generateContent(message);
    
//     // Return the actual reply from Gemini
//     return NextResponse.json({ reply: result });
//   } catch (error: any) {
//     console.error("API Error:", error );
//     return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
//   }
// }