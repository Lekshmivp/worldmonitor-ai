import type { RouteDescriptor } from '../router';

export const agentRoutes: RouteDescriptor[] = [
  {
    method: 'POST',
    path: '/api/agent/ask',
    handler: async (req: Request) => {
      try {
        const body = await req.json();
        const query = body.query;

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

        return new Response(
          JSON.stringify({ answer: data.response }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ error: 'Ollama connection failed' }),
          { status: 500 }
        );
      }
    }
  }
];