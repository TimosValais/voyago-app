import React from "react";
import { Box } from "@mui/material";
import { useDefaultIconSx } from "../styles/defaultStyles";

const AppIcon = ({ IconComponent, sx = {} }) => {
  const defaultIconSx = useDefaultIconSx();
  return (
    <Box component={IconComponent} sx={Object.assign({}, defaultIconSx, sx)} />
  );
};

export default AppIcon;
