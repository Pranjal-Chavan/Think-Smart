# backend/ml/learning_style.py

def evaluate_quiz(answers: list) -> dict:
    """
    Dummy learning style evaluator.
    Replace with actual logic to determine learning style from quiz answers.
    """
    if not answers:
        return {"style": "Unknown", "explanation": "No answers provided.", "suggestions": ""}
    
    # Dummy logic: if more than 3 answers, style is "Visual"
    style = "Visual" if len(answers) > 3 else "Auditory"
    explanation = f"Based on {len(answers)} answers, your style is {style}."
    suggestions = f"Study tips for {style} learners."
    
    return {"style": style, "explanation": explanation, "suggestions": suggestions}
