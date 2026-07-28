import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ color: "#1a237e", marginBottom: "20px", fontSize: "2rem" }}>
        🤟 About Hand Talk
      </h1>

      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "#0d47a1",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <p>
          <strong>Hand Talk</strong> is an AI-powered Sign Language Translator designed
          to bridge the communication gap between the hearing and Deaf communities.
          It converts spoken or written text into <strong>Indian Sign Language (ISL)</strong>
          gestures using <strong>Machine Learning</strong>, <strong>Computer Vision</strong>,
          and <strong>3D visualization</strong>.
        </p>

        <p>
          The system integrates advanced technologies like <strong>TensorFlow</strong>,
          <strong> MediaPipe</strong>, and <strong>Three.js</strong> to detect and
          visualize signs in real time through an interactive 3D avatar.
        </p>

        <p>
          This project focuses on accessibility, inclusivity, and education — empowering
          communication for individuals who rely on sign language.
        </p>

        <h2 style={{ marginTop: "30px", color: "#1565c0" }}>Key Features</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>🗣️ Speech-to-Text and Text-to-Sign Translation</li>
          <li>🧠 AI-based Gesture Recognition</li>
          <li>🎨 Real-time 3D Avatar Visualization (Three.js)</li>
          <li>📱 Responsive UI built with React</li>
          <li>🛡️ Privacy-first, user-friendly design</li>
        </ul>

        <p style={{ marginTop: "30px", fontStyle: "italic", color: "#1976d2" }}>
          “Breaking barriers, one sign at a time.”
        </p>
      </div>
    </div>
  );
}

export default About;
