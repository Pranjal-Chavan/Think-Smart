# backend/ml/chatgpt_api.py
from openai import OpenAI
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_ai_answer(prompt: str) -> str:
    """
    Sends a prompt to OpenAI and returns the AI's response.
    """
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",  # You can use gpt-3.5-turbo if you want cheaper/faster responses
            messages=[{"role": "user", "content": prompt}],
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error from OpenAI API: {str(e)}"
