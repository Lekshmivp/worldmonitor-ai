from langchain.tools import tool
from news_fetcher import fetch_news_api

@tool
def search_live_news(query: str) -> str:
    """Search latest news from internet"""
    articles = fetch_news_api(query)
    return str(articles[:5])