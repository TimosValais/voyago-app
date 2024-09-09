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
import TasksPage from "./pages/TasksPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { lightThemeConfig, darkThemeConfig } from "./styles/appThemeConfig";

function App() {
  console.log("the api base url : ", process.env.REACT_APP_APP_API_BASE_URL);
  console.log("the api base url : ", process.env.REACT_APP_AUTH_API_BASE_URL);

  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <ThemeProvider theme={darkMode ? darkThemeConfig : lightThemeConfig}>
      <CssBaseline />
      <Container>
        <Navbar
          toggleDarkMode={toggleDarkMode}
          authToken={localStorage.getItem("authToken")}
          onLogout={handleLogout}
        />
        <main className="main-content">
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={localStorage.getItem("authToken") ? <Home /> : <Login />}
            />
            <Route
              element={
                <ProtectedRoute authToken={localStorage.getItem("authToken")} />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tasks/:tripId" element={<TasksPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
