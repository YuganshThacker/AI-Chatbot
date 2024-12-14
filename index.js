const axios = require("axios");

const API_KEY = "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"; // Replace with your Hugging Face API key
const MODEL = "distilbert-base-uncased"; // Example masked language model

async function askQuestion(question) {
    try {
        const response = await axios.post(
            `https://api-inference.huggingface.co/models/${MODEL}`,
            { inputs: question },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        // Handle the response and select the first result
        const prediction = response.data[0].sequence; // This is the masked token's predicted result
        console.log("Predicted output:", prediction);
    } catch (error) {
        console.error("Error with Hugging Face API:", error.message);
    }
}

// Ask a question that involves a mask token
askQuestion("The capital of France is [MASK].");
