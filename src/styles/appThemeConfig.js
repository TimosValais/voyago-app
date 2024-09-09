import appPalette from "./appPalette.js";
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
    status: {
      canceled: appPalette.light.statusColors.canceled,
      pending: appPalette.light.statusColors.pending,
      started: appPalette.light.statusColors.started,
      completed: appPalette.light.statusColors.completed,
      ongoing: appPalette.light.statusColors.ongoing,
    },
    taskType: {
      generalBooking: appPalette.light.taskTypeColors.generalBooking,
      hotelBooking: appPalette.light.taskTypeColors.hotelBooking,
      ticketBooking: appPalette.light.taskTypeColors.ticketBooking,
      planning: appPalette.light.taskTypeColors.planning,
      other: appPalette.light.taskTypeColors.other,
    },
    role: {
      member: appPalette.light.roleColors.member,
      manager: appPalette.light.roleColors.manager,
      admin: appPalette.light.roleColors.admin,
    },
    buttons: {
      accept: appPalette.light.buttonColors.accept,
      danger: appPalette.light.buttonColors.danger,
    },
    buttonsText: {
      accept: appPalette.light.buttonTextColors.accept,
      danger: appPalette.light.buttonTextColors.danger,
    },
    border: {
      initial: appPalette.light.primary.main,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: appPalette.light.textPrimary,
          },
          "&:hover .MuiInputLabel-root": {
            color: appPalette.light.textSecondary,
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            color: appPalette.light.textSecondary,
          },
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.light.border.initial,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.light.border.hover,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.light.border.focus,
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
    status: {
      canceled: appPalette.dark.statusColors.canceled,
      pending: appPalette.dark.statusColors.pending,
      started: appPalette.dark.statusColors.started,
      completed: appPalette.dark.statusColors.completed,
      ongoing: appPalette.dark.statusColors.ongoing,
    },
    taskType: {
      generalBooking: appPalette.dark.taskTypeColors.generalBooking,
      hotelBooking: appPalette.dark.taskTypeColors.hotelBooking,
      ticketBooking: appPalette.dark.taskTypeColors.ticketBooking,
      planning: appPalette.dark.taskTypeColors.planning,
      other: appPalette.dark.taskTypeColors.other,
    },
    role: {
      member: appPalette.dark.roleColors.member,
      manager: appPalette.dark.roleColors.manager,
      admin: appPalette.dark.roleColors.admin,
    },
    buttons: {
      accept: appPalette.dark.buttonColors.accept,
      danger: appPalette.dark.buttonColors.danger,
    },
    buttonsText: {
      accept: appPalette.dark.buttonTextColors.accept,
      danger: appPalette.dark.buttonTextColors.danger,
    },
    border: {
      initial: appPalette.dark.primary.main,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: appPalette.dark.textPrimary,
          },
          "&:hover .MuiInputLabel-root": {
            color: appPalette.dark.textSecondary,
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            color: appPalette.dark.textSecondary,
          },
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.dark.border.initial,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.dark.border.hover,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: appPalette.dark.border.focus,
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
