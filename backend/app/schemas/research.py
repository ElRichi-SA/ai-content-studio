from pydantic import BaseModel, Field


class ResearchResult(BaseModel):
    topic: str
    summary: str
    key_points: list[str] = Field(default_factory=list)
    sources: list[str] = Field(default_factory=list)