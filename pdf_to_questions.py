# backend/ml/pdf_to_questions.py

def generate_questions(text: str) -> list:
    """
    Dummy PDF-to-questions function.
    Replace with actual logic to generate questions from PDF text.
    """
    if not text:
        return []
    return [
        f"What is the meaning of '{text[:10]}'?",
        f"Explain '{text[:10]}' in your own words."
    ]
