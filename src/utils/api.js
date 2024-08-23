import OpenAI from "openai";

export async function getResponse() {
	client = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
		baseUrl: "https://free.gpt.ge/v1"
	});

	try {
		const chatCompletion = await client.ChatCompletion({
			model: "gpt-4o-mini",
			messages: [{
				role: "user",
				content: "say this is a test"
			}],
		});
  
		// Use chatCompletion here
	} catch (error) {
		console.error("Error creating OpenAI client:", error);
	}
}