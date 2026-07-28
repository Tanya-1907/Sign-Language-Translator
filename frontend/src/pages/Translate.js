import React, { useState } from "react";
import axios from "axios";

export default function Translate() {

  const [inputText, setInputText] = useState("");
  const [gloss, setGloss] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⭐ Get video path dynamically
  const getVideoPath = (word) => `/signVideos/${word}.mp4`;

  // ⭐ Check if video exists
  const checkVideoExists = (path) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.src = path;

      video.onloadeddata = () => resolve(true);
      video.onerror = () => resolve(false);
    });
  };

  // ⭐ Build playlist (word → fallback to alphabet)
  const playVideos = async (glossText) => {

    const words = glossText.split(" ");
    let sequence = [];

    for (let word of words) {

      const wordPath = getVideoPath(word);
      const exists = await checkVideoExists(wordPath);

      if (exists) {

        sequence.push(wordPath);

      } else {

        // fallback to spelling
        const letters = word.split("");

        for (let letter of letters) {
          const letterPath = getVideoPath(letter);
          sequence.push(letterPath);
        }

      }

    }

    setPlaylist(sequence);
    setCurrentIndex(0);
  };

  // ⭐ Move to next video
  const handleVideoEnd = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // 🎤 Speech input
  const startSpeech = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.onresult = (e) => {
      setInputText(e.results[0][0].transcript);
    };

    recognition.start();
  };

  // 🔄 Translate → Gloss → Video
  const translateText = async () => {

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/api/text-to-gloss/",
        { text: inputText }
      );

      const glossText = res.data.gloss;

      setGloss(glossText);

      await playVideos(glossText);

    } catch {
      alert("Backend connection failed");
    }

  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 80,
      fontFamily: "sans-serif"
    }}>

      <h1 style={{
        background: "linear-gradient(to right, purple, cyan)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        HandTalk AI Translator
      </h1>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter or speak text..."
        style={{
          width: 400,
          height: 120,
          borderRadius: 10,
          padding: 10,
          marginTop: 20
        }}
      />

      <div style={{ marginTop: 20 }}>

        <button
          onClick={startSpeech}
          style={{
            padding: "10px 20px",
            borderRadius: 20,
            marginRight: 10,
            background: "purple",
            color: "white",
            border: "none"
          }}
        >
          🎤 Speak
        </button>

        <button
          onClick={translateText}
          style={{
            padding: "10px 20px",
            borderRadius: 20,
            background: "linear-gradient(to right, purple, cyan)",
            color: "white",
            border: "none"
          }}
        >
          Translate →
        </button>

      </div>

      <h2 style={{ marginTop: 40 }}>Gloss Output</h2>

      <div style={{
        width: 500,
        minHeight: 80,
        borderRadius: 14,
        padding: 20,
        border: "1px solid #ddd",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        background: "#fafafa"
      }}>
        {gloss}
      </div>

      {/* ⭐ VIDEO PLAYER */}
      <div style={{
        marginTop: 40,
        width: 500,
        height: 350,
        borderRadius: 20,
        background: "linear-gradient(135deg,#f5f7fa,#e4ecf5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {playlist.length > 0 && (
          <video
            key={playlist[currentIndex]}
            src={playlist[currentIndex]}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            style={{
              width: "100%",
              borderRadius: 20,
              transition: "opacity 0.4s ease-in-out",
              opacity: 1
            }}
          />
        )}
      </div>

    </div>
  );
}