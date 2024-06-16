import React from "react";
import { Button, Typography } from "@mui/material";
import {
  defaultButtonProps,
  defaultButtonSx,
  defaultTypographyProps,
  defaultTypographySx,
} from "../styles/defaultStyles";

const AppButton = ({
  variant,
  color,
  text,
  onClick,
  sx = {},
  typographyProps = {},
  typographySx = {},
}) => {
  return (
    <Button
      variant={variant ?? defaultButtonProps.variant}
      color={color ?? defaultButtonProps.color}
      onClick={onClick}
      sx={Object.assign({}, defaultButtonSx, sx)}
    >
      <Typography
        variant={typographyProps.variant ?? defaultTypographyProps.variant}
        component={
          typographyProps.component ?? defaultTypographyProps.component
        }
        sx={Object.assign({}, defaultTypographySx, typographySx)}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default AppButton;
