import React, { useState } from "react";
import "./App.css";
import { Container, CssBaseline } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trips from "./pages/Trips";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import { lightThemeConfig, darkThemeConfig } from "./styles/appThemeConfig";
import { login, register } from "./api/mockApi";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = async (username, password) => {
    try {
      const token = login(username, password);
      setAuthToken(token);
      setUsername(username);
      setAuthError(null);
      navigate("/"); // Navigate to home page after successful login
    } catch (error) {
      setAuthError(error.message);
    }
  };

  const handleRegister = async (username, password) => {
    try {
      register(username, password);
      setAuthError(null);
      navigate("/login"); // Navigate to login page after successful registration
    } catch (error) {
      setAuthError(error.message);
    }
  };

  const handleLogout = () => {
    setAuthToken(null);
    setUsername("");
    navigate("/login");
  };

  return (
    <ThemeProvider theme={darkMode ? darkThemeConfig : lightThemeConfig}>
      <CssBaseline />
      <Container>
        <Navbar
          toggleDarkMode={toggleDarkMode}
          authToken={authToken}
          onLogout={handleLogout}
          username={username}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/trips"
              element={
                authToken ? (
                  <Trips />
                ) : (
                  <Login onLogin={handleLogin} authError={authError} />
                )
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/register"
              element={
                <Register onRegister={handleRegister} authError={authError} />
              }
            />
            <Route
              path="/login"
              element={
                authToken ? (
                  <Home />
                ) : (
                  <Login onLogin={handleLogin} authError={authError} />
                )
              }
            />
            <Route
              path="/profile"
              element={
                authToken ? (
                  <Profile username={username} onLogout={handleLogout} />
                ) : (
                  <Login onLogin={handleLogin} authError={authError} />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
