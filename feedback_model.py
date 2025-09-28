# models/feedback_model.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class FeedbackCreate(BaseModel):
    owner_id: str
    chat_id: Optional[str]
    rating: Optional[int] = None  # 1-5
    comment: Optional[str] = None

class Feedback(BaseModel):
    id: Optional[str]
    owner_id: str
    chat_id: Optional[str]
    rating: Optional[int]
    comment: Optional[str]
    created_at: datetime = datetime.utcnow()
