# backend/routes/visualization_routes.py
from fastapi import APIRouter
from pydantic import BaseModel

visualization_routes = APIRouter()

class ChartRequest(BaseModel):
    data: list
    chart_type: str

@visualization_routes.post("/generate-chart")
async def generate_chart(request: ChartRequest):
    # Generate chart using data
    return {"msg": f"{request.chart_type} chart generated", "chart_url": "URL_here"}
