import OpenAI from "openai";

export function getResponse() {
	return new Promise(async (resolve, reject) => {
		const client = new OpenAI({
			apiKey: process.env.OPENAI_API_KEY,
			dangerouslyAllowBrowser: true,
			baseUrl: "https://free.gpt.ge/v1"
		});

		console.log('1', client)
  
		try {
			const chatCompletion = await client.createChatCompletion({
				model: selectedOption.value,
				messages: [{
					role: "user",
					content: userMessage
				}],
			});
	
			const assistantMessage = chatCompletion.data.choices[0].message.content;
			resolve(assistantMessage); // Resolve with the assistant's message
		} catch (error) {
			console.error("Error fetching response:", error);
			reject(error); // Reject with the error
		} finally {
			console.log(false);
		}
	});
}