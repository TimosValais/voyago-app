import React from "react";
import { Box, Typography } from "@mui/material";
import { defaultTypographySx } from "../styles/defaultStyles";
import AppButton from "../components/AppButton";

const Profile = ({ username, onLogout }) => {
  return (
    <>
      <Box>
        <Typography variant="h1" sx={defaultTypographySx}>
          This is {username}'s profile!
        </Typography>
        <AppButton onClick={onLogout} text={"Logout"} />
      </Box>
    </>
  );
};
export default Profile;
