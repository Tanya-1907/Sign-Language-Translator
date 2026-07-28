A prototype web application that translates text into sign language by displaying corresponding sign videos. The project is built using a React frontend and a Django backend, utilizing a gloss dataset to map input words to sign language videos.

## Features

- Translate text into sign language
- Dynamic sign video playback
- Gloss-based translation
- React user interface
- Django backend API
- Dataset-driven sign lookup

## Tech Stack

### Frontend
- React.js
- JavaScript
- Axios
- CSS

### Backend
- Django
- Django REST Framework
- Python

### Dataset
- ISL (Indian Sign Language) Gloss Dataset
- JSON-based gloss mapping
- MP4 sign videos

## Project Structure

```
Sign-Language-Translator/
│
├── backend/
│   ├── api/
│   ├── core/
│   ├── dataset/
│   ├── models/
│   ├── translate/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/Tanya-1907/Sign-Language-Translator.git
cd Sign-Language-Translator
```

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt

python manage.py runserver
```

### Frontend Setup

Open another terminal.

```bash
cd frontend

npm install

npm start
```

The React application will run at:

```
http://localhost:3000
```

The Django server will run at:

```
http://127.0.0.1:8000
```

## How It Works

1. User enters text.
2. The application processes the text into gloss words.
3. Each gloss is matched with a corresponding sign language video.
4. Videos are played sequentially to represent the translated sentence.

## Future Improvements

- Continuous sentence translation
- AI/NLP-based gloss generation
- Webcam sign recognition
- Support for multiple sign languages
- Text-to-speech integration
- Mobile application

## Project Status

**Prototype (MVP)**

This project is currently under development and serves as a prototype demonstrating text-to-sign language translation using a React and Django architecture.

## Author

**Tanya**

GitHub: https://github.com/Tanya-1907

## License

This project is intended for educational and research purposes.