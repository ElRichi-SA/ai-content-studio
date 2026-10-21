from fastapi import FastAPI

from app.api.routes.health import router as health_router

app = FastAPI(
    title="AI Content Studio API",
    description="Backend for AI-powered content creation agents",
    version="0.1.0",
)

app.include_router(health_router)