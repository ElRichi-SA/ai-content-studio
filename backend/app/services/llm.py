from langchain_google_genai import ChatGoogleGenerativeAI

from app.core.config import settings


def get_llm() -> ChatGoogleGenerativeAI:
    return ChatGoogleGenerativeAI(
        model="gemini-3.5-flash-lite",
        google_api_key=settings.google_api_key,
    )