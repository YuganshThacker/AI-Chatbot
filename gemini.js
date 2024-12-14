const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the library
const genAI = new GoogleGenerativeAI({
    apiKey: "AIzaSyAuDCoz_umtzKTlV8e0sRJoPKVJXocWXe8", // Replace with your valid API key
});

(async () => {
    try {
        // Retrieve the model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Prepare the prompt
        const prompt = "Explain how AI works";

        // Call the API with the correct payload structure
        const result = await model.generateContent({ prompt });

        // Log the result
        console.log("Generated Response:", result?.text || result);
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
})();
