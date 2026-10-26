from pydantic import BaseModel, Field


class ContentIdea(BaseModel):
    topic: str = Field(min_length=3)
    category: str
    platform: str
    duration_seconds: int = Field(gt=0, le=180)