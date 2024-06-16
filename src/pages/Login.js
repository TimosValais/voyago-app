import React, { useState } from "react";
import { Box, Typography, Link, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import AppButton from "../components/AppButton";
import AppTextField from "../components/AppTextField";

const Login = ({ onLogin, authError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "background.default",
        padding: 3,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <AppTextField
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <AppTextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {authError && (
            <Typography color="error" variant="body2" align="center">
              {authError}
            </Typography>
          )}
          <AppButton
            type="submit"
            text="Login"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, width: "100%" }}
            onClick={handleLogin}
          />
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Link component={NavLink} to="/register" color="inherit">
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
