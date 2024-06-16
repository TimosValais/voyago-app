import appPalette from "./appPallete.js";
import { createTheme } from "@mui/material/styles";

const lightThemeConfig = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: appPalette.light.primary,
    },
    secondary: {
      main: appPalette.light.secondary,
    },
    text: {
      primary: appPalette.light.textPrimary,
      secondary: appPalette.light.textSecondary,
    },
    background: {
      default: appPalette.light.background.default,
      paper: appPalette.light.background.paper,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: appPalette.light.textPrimary, // Initial color for placeholder
          },
          "&:hover .MuiInputLabel-root": {
            color: appPalette.light.textSecondary, // Initial color for hover placeholder
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            color: appPalette.light.textSecondary, // Color for shrink label
          },
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.light.border.initial, // Initial color for border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.light.border.hover, // Color for border on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.light.border.focus, // Color for border on focus
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: appPalette.light.textPrimary,
          "&:hover": {
            color: appPalette.light.textSecondary,
          },
        },
      },
    },
  },
});

const darkThemeConfig = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: appPalette.dark.primary,
    },
    secondary: {
      main: appPalette.dark.secondary,
    },
    text: {
      primary: appPalette.dark.textPrimary,
      secondary: appPalette.dark.textSecondary,
    },
    background: {
      default: appPalette.dark.background.default,
      paper: appPalette.dark.background.paper,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: appPalette.dark.textPrimary, // Initial color for placeholder
          },
          "&:hover .MuiInputLabel-root": {
            color: appPalette.dark.textSecondary, // Initial color for hover placeholder
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            color: appPalette.dark.textSecondary, // Color for shrink label
          },
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.dark.border.initial, // Initial color for border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.dark.border.hover, // Color for border on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.dark.border.focus, // Color for border on focus
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: appPalette.dark.textPrimary,
          "&:hover": {
            color: appPalette.dark.textSecondary,
          },
        },
      },
    },
  },
});

export { lightThemeConfig, darkThemeConfig };
