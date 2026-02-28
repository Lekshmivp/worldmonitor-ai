from langchain_community.chat_models import ChatOllama
from langchain.agents import initialize_agent, AgentType
from tools import search_live_news

def build_agent():
    llm = ChatOllama(
        model="llama3.1:8b",
        temperature=0.2
    )

    tools = [search_live_news]

    agent = initialize_agent(
        tools,
        llm,
        agent=AgentType.OPENAI_FUNCTIONS,
        verbose=True
    )

    return agents