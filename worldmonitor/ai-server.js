import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

app.post('/agent', async (req, res) => {
  try {
    const { query } = req.body;

    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: query,
        stream: false
      })
    });

    const data = await ollamaRes.json();
    res.json({ answer: data.response });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ollama connection failed' });
  }
});

app.listen(5000, () => {
  console.log('AI server running at http://localhost:5000');
});