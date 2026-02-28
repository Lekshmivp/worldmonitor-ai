import { Panel } from './Panel';

export class LiveAgentPanel extends Panel {

  constructor() {
    super({ id: 'live-agent', title: 'AI Agent', className: 'panel-wide' });
    this.renderUI();
  }

  private renderUI() {
    this.content.innerHTML = `
      <div style="display:flex;flex-direction:column;height:100%">
        <div id="chat" 
             style="flex:1;overflow:auto;margin-bottom:10px;padding:8px;font-size:13px;line-height:1.4">
        </div>
        <div style="display:flex;gap:8px">
          <input id="input" 
                 placeholder="Ask about live events, geopolitics, markets..."
                 style="flex:1;padding:8px;border-radius:6px;border:1px solid #333;background:#111;color:#fff"/>
          <button id="send" 
                  style="padding:8px 12px;border-radius:6px;background:#2b6cff;color:white;border:none;cursor:pointer">
            Send
          </button>
        </div>
      </div>
    `;

    const sendBtn = this.content.querySelector('#send')!;
    const input = this.content.querySelector('#input') as HTMLInputElement;

    sendBtn.addEventListener('click', () => this.ask());
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.ask();
    });
  }

  private async ask() {
  const input = this.content.querySelector('#input') as HTMLInputElement;
  const chat = this.content.querySelector('#chat') as HTMLElement;

  const q = input.value.trim();
  if (!q) return;

  input.value = "";

  this.appendMessage(chat, 'You', q);
  this.appendMessage(chat, 'AI', 'Thinking...', true);

  try {
    const res = await fetch('/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: q })
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    this.replaceLastMessage(chat, data.answer || 'No response.');
  } catch (err) {
    console.error(err);
    this.replaceLastMessage(chat, '⚠️ Error connecting to AI backend.');
  }
}

  private appendMessage(chat: HTMLElement, sender: string, text: string, isTemp = false) {
    const div = document.createElement('div');
    div.className = 'chat-message';
    div.dataset.temp = isTemp ? 'true' : 'false';

    div.style.marginBottom = '8px';
    div.innerHTML = `
      <b>${sender}:</b>
      <div style="margin-top:4px;white-space:pre-wrap">${this.escapeHtml(text)}</div>
    `;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }

  private replaceLastMessage(chat: HTMLElement, newText: string) {
    const messages = chat.querySelectorAll('.chat-message');
    if (!messages.length) return;

    const last = messages[messages.length - 1] as HTMLElement;
    last.dataset.temp = 'false';
    last.innerHTML = `
      <b>AI:</b>
      <div style="margin-top:4px;white-space:pre-wrap">${this.escapeHtml(newText)}</div>
    `;

    chat.scrollTop = chat.scrollHeight;
  }

  private escapeHtml(text: string) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }
}