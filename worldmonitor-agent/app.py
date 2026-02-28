from fastapi import FastAPI
from pydantic import BaseModel
from agent import build_agent

app = FastAPI()
agent = build_agent()

class AskRequest(BaseModel):
    query: str

@app.post("/api/agent/ask")
def ask(req: AskRequest):
    result = agent.run(req.query)
    return {"answer": result}