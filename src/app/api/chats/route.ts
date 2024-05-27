import OpenAI from "openai";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";
import { getContext } from "@/lib/context";
import { db } from "@/lib/db";
import { chats, messages as _messages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, chatId } = await req.json();

    // Fetch the chat record
    const chat = await db.select().from(chats).where(eq(chats.id, chatId)).limit(1);
    if (chat.length !== 1) {
      return NextResponse.json({ error: "chat not found" }, { status: 404 });
    }
    const fileKey = chat[0].fileKey;

    // Get the context
    const lastMessage = messages[messages.length - 1];
    const context = await getContext(lastMessage.content, fileKey);

    // Prepare the prompt
    const prompt = {
      role: "system",
      content: `
      START CONTEXT BLOCK
      ${context}
      END OF CONTEXT BLOCK
    `,
    };

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        prompt,
        ...messages.filter((message: Message) => message.role === "user"),
      ],
      stream: true,
    });

    // Stream the response
    const stream = OpenAIStream(response, {
      onStart: async () => {
        // Save user message into the database
        await db.insert(_messages).values({
          chatId,
          content: lastMessage.content,
          role: "user",
        });
      },
      onCompletion: async (completion) => {
        // Save AI message into the database
        await db.insert(_messages).values({
          chatId,
          content: completion,
          role: "system",
        });
      },
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
