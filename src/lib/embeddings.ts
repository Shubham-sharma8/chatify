import OpenAI from "openai";

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  export async function getEmbeddings(text: string) {
    try {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-large",
        input: text.replace(/\n/g, " "),
      });
      const result = response.data[0].embedding;  // fix here
      return result as number[];
    } catch (error) {
      console.log("error calling openai embeddings api", error);
      throw error;
    }
  }