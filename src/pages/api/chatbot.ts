import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: 'No user message provided.' });
  }

  const API_KEY = "AIzaSyBRE9Tee59umxJhBujdnufLpT_z8R40ZR8";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent?key=${API_KEY}`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ contents: [{ parts: [{ text: userMessage }] }] }),
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      const botResponse = data.candidates[0]?.content?.parts?.[0]?.text;
      res.status(200).json({ response: botResponse || "No response text found." });
    } else {
      res.status(500).json({ error: 'No candidates found in response.' });
    }
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    res.status(500).json({ error: 'Error fetching data from Gemini API.' });
  }
}
