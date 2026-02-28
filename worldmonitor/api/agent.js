export const config = {
  runtime: 'nodejs',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { query } = req.body;

    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: query,
        stream: false,
      }),
    });

    const data = await ollamaRes.json();
    return res.status(200).json({ answer: data.response });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Ollama connection failed' });
  }
}