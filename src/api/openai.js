import OpenAI from "openai";

const client = new OpenAI({ 
    apiKey: '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'
    ,dangerouslyAllowBrowser: true
});

export const getFoodsList = async (location) => {
    const prompt = `You are a local food expert. List the 5 best foods to try in ${location}, and where to get them. Return in JSON format like this:
  [
    {
      "dish": "Dish Name",
      "place": "Restaurant or Stall",
      "description": "Short reason why it's great"
      "app": "App Name",
    }
  ]`;
  
    try {
      const completion = await client.chat.completions.create({
        model: 'gpt-4o-mini', // or 'gpt-3.5-turbo'
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      });
  
      console.log(completion)
      const aiResponse = completion.choices[0].message.content;

      const cleaned = aiResponse
  .replace(/```json/g, '')
  .replace(/```/g, '')
  .trim();

      const foods = JSON.parse(cleaned);
      return foods;
  
    } catch (error) {
      console.error("OpenAI error:", error);
      throw new Error("Failed to get food suggestions from AI.");
    }
  };
  

export async function checkReview(text) {
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a review checker. Identify if this review looks fake or genuine." },
            { role: "user", content: text }
        ],
    });

    return response.choices[0].message.content;
}