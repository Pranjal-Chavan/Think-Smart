from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

auth_routes = APIRouter()

class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

# Store users in memory for testing
users_db = []

@auth_routes.post("/register")
async def register_user(request: RegisterRequest):
    # Check if email already exists
    for user in users_db:
        if user["email"] == request.email:
            return {"success": False, "msg": "Email already registered"}

    # Save user
    users_db.append({
        "username": request.username,
        "email": request.email,
        "password": request.password  # In production, hash the password!
    })

    return {
        "success": True,
        "msg": "Signup successful",
        "data": {"username": request.username, "email": request.email}
    }

@auth_routes.post("/login")
async def login_user(request: LoginRequest):
    # Find user
    user = next((u for u in users_db if u["email"] == request.email and u["password"] == request.password), None)
    if not user:
        return {"success": False, "msg": "Invalid email or password"}

    return {
        "success": True,
        "msg": "Login successful",
        "data": {"username": user["username"], "email": user["email"]}
    }
