# models/user_model.py
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: Optional[str] = None

class UserInDB(BaseModel):
    id: Optional[str]
    email: EmailStr
    hashed_password: str
    full_name: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class UserPublic(BaseModel):
    id: str
    email: EmailStr
    full_name: Optional[str] = None
