import csv
from django.http import JsonResponse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

def translate_text(request):
    if request.method == "POST":
        import json
        data = json.loads(request.body)
        input_text = data.get("text", "").lower()

        # Load sign dictionary from CSV
        sign_dict_path = BASE_DIR / "translate" / "data" / "sign_dictionary.csv"
        sign_dict = {}

        with open(sign_dict_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                sign_dict[row["text"].lower()] = row["sign"]

        # Find translation
        translation = sign_dict.get(input_text, "❓ No sign found for this word")

        return JsonResponse({
            "status": "success",
            "input": input_text,
            "translation": translation
        })
