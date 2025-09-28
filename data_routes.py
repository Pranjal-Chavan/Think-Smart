# backend/routes/data_routes.py
from fastapi import APIRouter
from pydantic import BaseModel

data_routes = APIRouter()

class DataRequest(BaseModel):
    key: str
    value: str

@data_routes.post("/save-data")
async def save_data(request: DataRequest):
    # Save or process data here
    return {"msg": "Data saved successfully"}

@data_routes.get("/get-data")
async def get_data():
    # Retrieve data
    return {"data": "Sample data"}
