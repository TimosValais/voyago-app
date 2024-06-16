import React from "react";
import { Box } from "@mui/material";
import { defaultIconSx } from "../styles/defaultStyles";

const AppIcon = ({ IconComponent, sx = {} }) => {
  return (
    <Box component={IconComponent} sx={Object.assign({}, defaultIconSx, sx)} />
  );
};

export default AppIcon;
