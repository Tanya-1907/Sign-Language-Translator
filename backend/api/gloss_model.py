import json
import os

# Load dataset once
dataset_path = os.path.join(os.path.dirname(__file__), "gloss_dataset.json")

with open(dataset_path, "r") as f:
    DATASET = json.load(f)


def predict_gloss(text):

    text = text.strip().lower()

    # exact match search
    for row in DATASET:
        if row["text"] == text:
            return row["gloss"]

    # fallback rule-based
    words = text.split()

    gloss_words = []

    for w in words:
        gloss_words.append(w.upper())

    return " ".join(gloss_words)