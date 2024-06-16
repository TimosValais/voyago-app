import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = ({ variant, color, text }) => (
  <>
    <Typography variant={variant ?? "h1"} color={color ?? "textPrimary"}>
      {text}
    </Typography>
  </>
);
export default MuiTypography;
