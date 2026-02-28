import requests

def fetch_news_api(query="middle east"):
    API_KEY = "YOUR_NEWSAPI_KEY"
    url = f"https://newsapi.org/v2/everything?q={query}&language=en&apiKey={API_KEY}"
    r = requests.get(url)
    data = r.json()

    articles = []
    for a in data.get("articles", []):
        articles.append({
            "title": a["title"],
            "source": a["source"]["name"],
            "published": a["publishedAt"]
        })

    return articles