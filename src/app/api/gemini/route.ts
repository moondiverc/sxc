import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    // const apiKey = process.env.GEMINI_API_KEY;
    const apiKey = " ";
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY belum di-set di .env.local" },
        { status: 500 },
      );
    }

    const body = (await req.json()) as { messages?: ChatMessage[] };
    const messages = body?.messages ?? [];

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); //get modelqx

    const systemMessage = {
      role: "model",
      parts: [
        {
          text: `
            You are a helpful assistant for the StudentxCEO website.
            StudentxCEO is a strategic leadership accelerator in Indonesia, connecting high-potential students with corporate partners and universities.
            You should answer questions about:
            - Programs and batches
            - Alumni and testimonials
            - Partnerships
            - Benefits and impact of the program
            Always provide concise, accurate, and friendly answers. If unsure, say you don’t know.
    `,
        },
      ],
    };

    const contents = [
      systemMessage,
      ...messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
    ];

    const result = await model.generateContent({
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
    });

    return NextResponse.json({ text: result.response.text() });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Terjadi error di server." },
      { status: 500 },
    );
  }
}
