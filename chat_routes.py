# backend/routes/chat_routes.py
from fastapi import APIRouter
from pydantic import BaseModel

chat_routes = APIRouter()

class ChatMessage(BaseModel):
    message: str

@chat_routes.post("/chat-message")
async def chat_message(request: ChatMessage):
    # Example: save message or process it
    return {"reply": f"Received your message: {request.message}"}
