# backend/routes/feedback_routes.py
from fastapi import APIRouter
from pydantic import BaseModel

feedback_routes = APIRouter()

class FeedbackRequest(BaseModel):
    user_id: str
    feedback: str

@feedback_routes.post("/submit-feedback")
async def submit_feedback(request: FeedbackRequest):
    # Store feedback
    return {"msg": "Feedback submitted successfully"}
