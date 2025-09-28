# backend/routes/notes_routes.py
from fastapi import APIRouter
from pydantic import BaseModel

notes_routes = APIRouter()

class NoteRequest(BaseModel):
    title: str
    content: str

@notes_routes.post("/add-note")
async def add_note(request: NoteRequest):
    # Save note
    return {"msg": f"Note '{request.title}' added successfully"}

@notes_routes.get("/list-notes")
async def list_notes():
    # Return list of notes
    return {"notes": []}  # Replace with actual data
