from fastapi import APIRouter

from app.agents.researcher import ResearchAgent
from app.schemas.content import ContentIdea

router = APIRouter(prefix="/api/ideas", tags=["ideas"])

research_agent = ResearchAgent()


@router.post("")
def create_idea(idea: ContentIdea):
    research = research_agent.run(idea)

    return {
        "message": "Idea researched successfully",
        "idea": idea,
        "research": research,
    }