import React from "react";
import { Button, Typography } from "@mui/material";
import {
  defaultButtonProps,
  useDefaultButtonSx,
  defaultTypographyProps,
  useDefaultTypographySx,
} from "../styles/defaultStyles";
import { useTheme } from "@mui/material/styles";

// Utility function to get nested color values from the theme
const getColorFromTheme = (theme, colorPath) => {
  if (!colorPath) return null;
  const keys = colorPath.split(".");
  return keys.reduce(
    (obj, key) => (obj && obj[key] ? obj[key] : null),
    theme.palette
  );
};

const AppButton = ({
  variant,
  color,
  text,
  onClick,
  startIcon = null,
  sx = {},
  typographyProps = {},
  typographySx = {},
}) => {
  const defaultButtonSx = useDefaultButtonSx();
  const defaultTypographySx = useDefaultTypographySx();
  const theme = useTheme();

  // Resolve the button color from the theme using the passed color prop
  const buttonBgColor =
    getColorFromTheme(theme, color) || theme.palette.primary.main;

  return (
    <Button
      variant={variant ?? defaultButtonProps.variant}
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        ...defaultButtonSx,
        backgroundColor: buttonBgColor,
        color: theme.palette.text.primary,
        "&:hover": {
          backgroundColor: buttonBgColor,
        },
        ...sx,
      }}
    >
      <Typography
        variant={typographyProps.variant ?? defaultTypographyProps.variant}
        component={
          typographyProps.component ?? defaultTypographyProps.component
        }
        sx={{ ...defaultTypographySx, ...typographySx }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default AppButton;
