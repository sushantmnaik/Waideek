// import { NextResponse } from "next/server";
// import { GoogleGenAI } from "@google/genai";


// // export default function handler(req, res) {
// //     var input = req.query.input;
// // const ai = new GoogleGenAI({});

// // const interaction = await ai.interactions.create({
// //   model: "gemini-3.5-flash",
// //   input: input,
// // });
// // res.status(200).json({ interaction.output_text })
// // NextResponse.json({ interaction.output_text });


// import { GoogleGenerativeAI } from "@google/generative-ai";

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     if (!process.env.GEMINI_API_KEY) {
//       throw new Error("GEMINI_API_KEY is missing");
//     }

//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const models = await genAI.listModels();
//     console.log("AVAILABLE MODELS:", models);
  
//   //   // Use a valid model name like 'gemini-1.5-flash'
//   //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

//   //   const result = await model.generateContent(message);
//   //   const response = await result.response;
//   //   const text = response.text();

//   //   return NextResponse.json({ reply: text });
//   } catch (error: any) {
//     console.error("API Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// // }

// }

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(message);
    const response = await result.response;
    
    // Return the actual reply from Gemini
    return NextResponse.json({ reply: response.text() });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}