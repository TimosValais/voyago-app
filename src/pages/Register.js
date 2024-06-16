import React, { useState } from "react";
import { Box, Typography, Link, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import AppButton from "../components/AppButton";
import AppTextField from "../components/AppTextField";

const Register = ({ onRegister, authError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    onRegister(username, password);
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleRegister} sx={{ mt: 1 }}>
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
            text="Register"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, width: "100%" }}
            onClick={handleRegister}
          />
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <Link component={NavLink} to="/login" color="inherit">
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
