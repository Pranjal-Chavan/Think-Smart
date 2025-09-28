# models/chat_model.py
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    text: str
    timestamp: datetime = datetime.utcnow()

class ChatRecord(BaseModel):
    id: Optional[str]
    owner_id: str
    messages: List[ChatMessage] = []
    created_at: datetime = datetime.utcnow()
