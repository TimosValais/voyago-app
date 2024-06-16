import { useTheme } from "@mui/material/styles";

const defaultButtonProps = {
  variant: "contained",
  color: "primary",
};

const useDefaultButtonSx = () => {
  const theme = useTheme();
  return {
    textTransform: "none",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  };
};

const defaultTypographyProps = {
  variant: "body1",
  component: "span",
};

const useDefaultTypographySx = () => {
  const theme = useTheme();
  return {
    color: theme.palette.text.primary,
  };
};

const useDefaultIconSx = () => {
  const theme = useTheme();
  return {
    width: { xs: 20, sm: 25, md: 30 },
    height: { xs: 20, sm: 25, md: 30 },
    color: theme.palette.text.primary,
  };
};

export {
  defaultButtonProps,
  useDefaultButtonSx,
  defaultTypographyProps,
  useDefaultTypographySx,
  useDefaultIconSx,
};
