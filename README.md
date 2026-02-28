# 🌍 WorldMonitor AI

AI-Powered Geopolitical Intelligence & Monitoring Platform  
(Extended from the open-source WorldMonitor project with custom AI backend integration)

---

## 🔎 Overview

WorldMonitor AI is a full-stack geopolitical monitoring system combining:

- 🌐 Interactive global dashboard  
- 🛰 Conflict & infrastructure visualization  
- 📰 Multi-source intelligence feeds  
- 🤖 AI-powered summarization and analysis  
- 🎥 RTSP integration (UAE surveillance use case)  
- 🧠 LangChain + Ollama powered reasoning  

This project extends the original visualization platform by integrating a custom AI backend capable of contextual geopolitical analysis and intelligence summarization.

---

## 📦 Original Project Credit

Frontend platform originally cloned from:

👉 https://github.com/koala73/worldmonitor  

This repository extends that system with:

- Custom AI backend (Python + FastAPI)
- LangChain agent integration
- Ollama local LLM support
- RAG-based intelligence pipeline
- RTSP stream integration

---

## 🧠 AI Backend Capabilities

Built with:

- Python 3.10+
- FastAPI
- LangChain
- Ollama (local LLM inference)
- Retrieval-Augmented Generation (RAG)
- Custom geopolitical analysis tools
- Intelligence feed processing

### ✨ AI Features

- Real-time geopolitical summaries  
- Conflict & military movement analysis  
- Strategic intelligence briefing generation  
- Context-aware LLM reasoning  
- Multi-source news aggregation  
- UAE RTSP stream handling support  

---

## 🏗 System Architecture

```text
Frontend (Vite + TypeScript)
        ↓
API Proxy (/agent)
        ↓
FastAPI Backend
        ↓
LangChain Agent
        ↓
Ollama (Local LLM)
        ↓
News / Intelligence / RTSP Sources
```

---

## 📁 Project Structure

```text
worldmonitor-ai/
│
├── worldmonitor/           # Frontend dashboard (Vite + TS)
│
├── worldmonitor-agent/     # AI Backend
│   ├── app.py
│   ├── agent.py
│   ├── rag.py
│   ├── tools.py
│   ├── news_fetcher.py
│   ├── requirements.txt
│
├── README.md
└── .gitignore
```

---

## 🚀 Installation Guide

### 1️⃣ Frontend Setup

```bash
cd worldmonitor
npm install
npm run dev
```

Runs at:

```
http://localhost:3000
```

---

### 2️⃣ Backend Setup

```bash
cd worldmonitor-agent
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python app.py
```

Runs at:

```
http://localhost:5000
```

---

## 🔌 Ollama Setup

Install Ollama:

https://ollama.ai  

Pull a model:

```bash
ollama pull mistral
```

Make sure Ollama is running before starting the backend.

---

## 🛠 Technologies Used

### Frontend
- Vite  
- TypeScript  
- WebSockets  
- Geospatial visualization  

### Backend
- Python  
- FastAPI  
- LangChain  
- Ollama  
- RAG pipeline  
- REST APIs  

---

## 👩‍💻 Author

Extended & Integrated by:

**Lekshmi V P**  
Senior AI Research Developer  
Computer Vision & Intelligence Systems  

---

## ⚠️ Disclaimer

All geopolitical data sources belong to their respective providers.  
This project is intended for research and monitoring purposes only.
