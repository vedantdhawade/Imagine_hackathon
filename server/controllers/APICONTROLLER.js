import { generateResponse } from "./ApiRequest.js";

export const sentiment = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const prompt = `Analyze the sentiment of the following text and provide a score (positive, neutral, or negative): "${text}"`;
    const aiResponse = await generateResponse(prompt);
    res.status(200).json({ sentiment: aiResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
