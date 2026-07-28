import pandas as pd
import json

df = pd.read_csv("ISL Corpus sign glosses.csv")

data = []

for i, row in df.iterrows():

    text = str(row["Sentence"]).strip().lower()
    gloss = str(row["SIGN GLOSSES"]).strip().upper()

    if text != "nan" and gloss != "nan":

        data.append({
            "text": text,
            "gloss": gloss
        })

with open("gloss_dataset.json", "w") as f:
    json.dump(data, f, indent=2)

print("DONE ✅ Dataset Converted")