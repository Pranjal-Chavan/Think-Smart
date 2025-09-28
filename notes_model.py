# models/notes_models.py
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class NotesUpload(BaseModel):
    title: str
    content: str  # raw text of notes
    owner_id: str

class NotesAnalysisResult(BaseModel):
    id: Optional[str]
    owner_id: str
    title: str
    summary: str
    keywords: List[str]
    created_at: datetime = datetime.utcnow()
