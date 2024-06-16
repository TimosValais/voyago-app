import React from "react";
import { Box, Typography } from "@mui/material";
import AppButton from "../components/AppButton";
import { useDefaultTypographySx } from "../styles/defaultStyles";

const Profile = ({ username, onLogout }) => {
  const defaultTypographySx = useDefaultTypographySx();
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
