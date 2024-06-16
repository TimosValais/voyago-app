import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trips from "./pages/Trips";
import NotFound from "./pages/NotFound";
import themeConfig from "./styles/appThemeConfig";

const theme = createTheme({
  palette: {
    primary: themeConfig.palette.primary,
    secondary: themeConfig.palette.secondary,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips">
              <Route index element={<Trips />} />
              <Route path="/trips/:id" element={<Trips id />} />
            </Route>
            <Route path="/about-us" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
