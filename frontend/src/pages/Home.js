import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
        background:
          "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 50%, #d1c1f7 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 12s ease infinite",
        color: "#222",
      }}
    >
      {/* Soft glowing particles */}
      <Particles
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 35 },
            size: { value: 3 },
            move: { enable: true, speed: 0.8 },
            color: { value: ["#a18cd1", "#fbc2eb", "#8ec5fc"] },
            opacity: { value: 0.4 },
            links: { enable: true, color: "#c3a9ff", distance: 120 },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Floating emojis */}
      {["🤟", "✋", "👌", "🤘", "🖐️", "✊", "👍"].map((emoji, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: Math.random() * 40 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            fontSize: `${22 + Math.random() * 30}px`,
            opacity: 0.5,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
          textAlign: "center",
        }}
      >
        <motion.h1
          style={{
            fontSize: "3.5rem",
            color: "#5a00d2",
            textShadow: "0 0 20px rgba(151, 71, 255, 0.4)",
            marginBottom: "15px",
          }}
        >
          🤖 HandTalk 
        </motion.h1>

        <Typed
          strings={[
            "Where hands speak and AI listens 💬",
            "Translating gestures into words ✋",
            "Empowering communication through tech 🌸",
          ]}
          typeSpeed={50}
          backSpeed={35}
          loop
          style={{
            fontSize: "1.5rem",
            color: "#333",
            marginBottom: "30px",
          }}
        />

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/translate"
            style={{
              padding: "15px 40px",
              background:
                "linear-gradient(90deg, #a18cd1, #fbc2eb, #8ec5fc)",
              color: "#fff",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
              boxShadow: "0 0 20px rgba(161, 140, 209, 0.6)",
              transition: "all 0.3s ease",
            }}
          >
            Start Translating →
          </Link>
        </motion.div>
      </motion.div>

      {/* Features */}
      <div
        style={{
          zIndex: 2,
          position: "relative",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "60px 20px",
          background: "rgba(255,255,255,0.5)",
          backdropFilter: "blur(15px)",
          borderTop: "2px solid rgba(161,140,209,0.3)",
        }}
      >
        {[
          {
            icon: "🧠",
            title: "Smart Detection",
            text: "AI understands your hand gestures instantly.",
            color: "#a18cd1",
          },
          {
            icon: "🎥",
            title: "Real-time Feedback",
            text: "See live responses as you move your hands.",
            color: "#f78ed7",
          },
          {
            icon: "🌐",
            title: "Inclusive Connection",
            text: "Break communication barriers with AI translation.",
            color: "#8ec5fc",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              width: "280px",
              textAlign: "center",
              margin: "15px",
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: `0 8px 20px ${feature.color}40`,
              border: `3px solid ${feature.color}`,
            }}
          >
            <h2 style={{ fontSize: "2.5rem" }}>{feature.icon}</h2>
            <h3 style={{ color: feature.color }}>{feature.title}</h3>
            <p style={{ color: "#555", fontSize: "1rem" }}>{feature.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "25px",
          color: "#333",
          fontWeight: "500",
          background: "rgba(255,255,255,0.6)",
          borderTop: "1px solid rgba(161,140,209,0.2)",
        }}
      >
        © 2025 HandTalk  | Built with ❤️ to bridge communication gaps.
      </footer>
    </div>
  );
}
