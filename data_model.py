# models/data_model.py
from pydantic import BaseModel
from typing import Any, Optional
from datetime import datetime

class DataUpload(BaseModel):
    name: str
    description: Optional[str] = None
    raw_data: Any  # can be JSON / dict / list

class DataRecord(BaseModel):
    id: Optional[str]
    owner_id: str
    name: str
    description: Optional[str] = None
    raw_data: Any
    created_at: datetime = datetime.utcnow()
