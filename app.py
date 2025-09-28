# backend/app.py
import os
from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables from .env file
load_dotenv()
AI_KEY = os.getenv("AI_API_KEY")  # Make sure this is set in your .env

# Initialize FastAPI app
app = FastAPI(title="Think Smart Backend")

# CORS configuration for React frontend
origins = [
    "http://localhost:3000",  # React dev server
    "http://127.0.0.1:3000",  # Optional
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import routers AFTER app is created
from routes import (
    auth_routes,
    chat_routes,
    data_routes,
    feedback_routes,
    notes_routes,
    visualization_routes,
)
from routes.ai_routes import ai_routes

# Include routers
app.include_router(auth_routes.auth_routes)
app.include_router(chat_routes.chat_routes)
app.include_router(data_routes.data_routes)
app.include_router(feedback_routes.feedback_routes)
app.include_router(notes_routes.notes_routes)
app.include_router(visualization_routes.visualization_routes)
app.include_router(ai_routes, prefix="/api")  # AI endpoints prefixed with /api

# Root endpoint for quick check
@app.get("/")
async def root():
    return {"msg": "Think Smart backend is running"}

# Run app directly (development mode)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
