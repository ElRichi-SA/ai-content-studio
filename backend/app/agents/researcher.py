from app.schemas.content import ContentIdea
from app.schemas.research import ResearchResult
from app.services.llm import get_llm


class ResearchAgent:
    def __init__(self):
        self.llm = get_llm().with_structured_output(ResearchResult)

    def run(self, idea: ContentIdea) -> ResearchResult:
        prompt = f"""
You are a research assistant for a social media content studio.

Research the following topic:

{idea.topic}

Context:
- Category: {idea.category}
- Platform: {idea.platform}
- Target duration: {idea.duration_seconds} seconds

Your task is to provide accurate and useful research that can later
be transformed into a short-form social media video.

Requirements:
- Write a concise summary.
- Identify the most important factual points.
- Include relevant sources only when you know them.
- Never invent sources.
- Keep the information clear and useful for a short-form video.
"""

        return self.llm.invoke(prompt)