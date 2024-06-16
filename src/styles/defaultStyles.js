const defaultButtonProps = {
  variant: "contained",
  color: "primary",
};

const defaultButtonSx = {
  textTransform: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};

const defaultTypographyProps = {
  variant: "body1",
  component: "span",
};

const defaultTypographySx = {
  color: "text.primary", // Default to text.primary from the theme
};

const defaultIconSx = {
  width: { xs: 20, sm: 25, md: 30 },
  height: { xs: 20, sm: 25, md: 30 },
  color: "text.primary", // Default to text.primary from the theme
};

export {
  defaultButtonProps,
  defaultButtonSx,
  defaultTypographyProps,
  defaultTypographySx,
  defaultIconSx,
};
