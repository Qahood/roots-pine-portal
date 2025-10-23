import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("home");

  const correctPassword = "Rpinecamp@441";

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect password. Access restricted to Roots Pine students.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div
  style={{
    color: "white",
    textAlign: "center",
    minHeight: "100vh",               // allows page to expand
    backgroundImage: "url('rootspine.png')",  // your background
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",     // top-align content
    padding: "50px 20px",             // space from top
    backdropFilter: "brightness(0.6)",// dark overlay for readability
  }}
>

        <h1 style={{ color: "#e63946", fontSize: "2.5rem" }}>
          Roots Millennium Pine Portal
        </h1>
        <p style={{ color: "#f1faee" }}>
          Authorized Access Only – Students of Roots Millennium Pine Campus
        </p>
        <input
          type="password"
          placeholder="Enter Access Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            width: "250px",
            textAlign: "center",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#e63946",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    );
  }

  const renderPage = () => {
    switch (page) {
      case "home":
  return (
    <div
  style={{
    color: "white",
    textAlign: "center",
    minHeight: "100vh",           // ✅ change height to minHeight
    backgroundImage: "url('/ispr.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // ✅ change from center to flex-start
    backdropFilter: "brightness(0.6)",
    padding: "50px 20px",         // ✅ add top and bottom padding
  }}
>

    >
      <h1 style={{ color: "#f1faee", fontSize: "3rem", marginBottom: "20px" }}>
        Roots Millennium Pine Campus
      </h1>

      {/* Description paragraph */}
      <p
        style={{
          maxWidth: "700px",
          color: "#f1faee",
          fontSize: "1.2rem",
          lineHeight: "1.6rem",
          marginBottom: "20px",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "15px 20px",
          borderRadius: "10px",
        }}
      >
        Welcome to the Roots Pine Resource Portal! This website is designed to help students
        easily share and access academic resources including notes, past papers, and
        detailed study materials. You can upload your own notes, browse materials by
        subject or topic, and collaborate with other students to enhance learning and
        preparation. Organized, easy-to-use, and secure — it’s your hub for all study
        resources at Roots Millennium Pine Campus.
      </p>

      {/* College image */}
      <img
        src="/unnamed.jpg"  // 👈 your image file goes here
        alt="Roots Millennium Pine Campus"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          borderRadius: "15px",
          width: "70%",
          maxWidth: "800px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      />

      <p style={{ marginTop: "20px", color: "#f1faee" }}>
        Developed by <strong>Syed Muhammad Qahood</strong> — Roots Pine Resource Portal
      </p>
    </div>
  );
      case "resources":
  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        backgroundImage: "url('/ispr.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "brightness(0.5)",
      }}
    >
      <h2 style={{ color: "#f1faee" }}>📚 Shared Resources</h2>
      <p>Students can upload notes, past papers, and more (Firebase integration coming soon).</p>
    </div>
  );

      case "help":
  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        backgroundImage: "url('/ispr.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "brightness(0.5)",
      }}
    >
      <h2 style={{ color: "#f1faee" }}>🆘 Help Page</h2>
      <p>
        For any issue or query, contact your campus admin or email:
        <strong> rootspineportal@gmail.com</strong>
      </p>
      <p>
        Make sure to share helpful notes responsibly. Only verified Roots students
        should use this platform.
      </p>
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <nav
        style={{
          backgroundColor: "#e63946",
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          gap: "20px",
        }}
      >
        <button
          onClick={() => setPage("home")}
          style={{
            backgroundColor: page === "home" ? "#f1faee" : "#e63946",
            color: page === "home" ? "#e63946" : "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Home
        </button>
        <button
          onClick={() => setPage("resources")}
          style={{
            backgroundColor: page === "resources" ? "#f1faee" : "#e63946",
            color: page === "resources" ? "#e63946" : "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Resources
        </button>
        <button
          onClick={() => setPage("help")}
          style={{
            backgroundColor: page === "help" ? "#f1faee" : "#e63946",
            color: page === "help" ? "#e63946" : "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Help
        </button>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
