# backend/routes/ai_routes.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from ml.chatgpt_api import get_ai_answer
from ml.pdf_to_questions import generate_questions
from ml.math_solver import solve_problem
from ml.learning_style import evaluate_quiz

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

ai_routes = APIRouter()

class PromptRequest(BaseModel):
    prompt: str

class PDFRequest(BaseModel):
    text: str

class MathRequest(BaseModel):
    problem: str

class QuizRequest(BaseModel):
    answers: list

@ai_routes.post("/chat")
async def ask_ai(request: PromptRequest):
    if not request.prompt:
        raise HTTPException(status_code=400, detail="No prompt provided")
    answer = get_ai_answer(request.prompt)
    return {"answer": answer}

@ai_routes.post("/pdf-to-questions")
async def pdf_to_questions(request: PDFRequest):
    questions = generate_questions(request.text)
    return {"questions": questions}

@ai_routes.post("/math-solver")
async def math_solver(request: MathRequest):
    steps = solve_problem(request.problem)
    return {"steps": steps}

@ai_routes.post("/learning-style")
async def learning_style(request: QuizRequest):
    result = evaluate_quiz(request.answers)
    return result
