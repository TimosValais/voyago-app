import React from "react";
import { Button, Typography } from "@mui/material";
import {
  defaultButtonProps,
  useDefaultButtonSx,
  defaultTypographyProps,
  useDefaultTypographySx,
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
  const defaultButtonSx = useDefaultButtonSx();
  const defaultTypographySx = useDefaultTypographySx();

  return (
    <Button
      variant={variant ?? defaultButtonProps.variant}
      color={color ?? defaultButtonProps.color}
      onClick={onClick}
      sx={{ ...defaultButtonSx, ...sx }}
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
