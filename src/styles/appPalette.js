const appPalette = Object.freeze({
  light: {
    primary: "#9448BC",
    secondary: "#94BFA7",
    textPrimary: "#2A6041",
    textSecondary: "#E3D3E4",
    border: {
      initial: "#2A6041",
      hover: "#E3D3E4",
      focus: "#E3D3E4",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    statusColors: {
      canceled: "#F44336",
      pending: "#FFC107",
      started: "#2196F3",
      completed: "#4CAF50",
      ongoing: "#1976D2",
    },
    roleColors: {
      member: "#9E9E9E",
      manager: "#FFC107",
      admin: "#D32F2F",
    },
    taskTypeColors: {
      generalBooking: "#9448BC",
      hotelBooking: "#94BFA7",
      ticketBooking: "#2196F3",
      planning: "#4CAF50",
      other: "#9E9E9E",
    },
    buttonColors: {
      accept: "#388E3C",
      danger: "#E57373",
    },
    buttonTextColors: {
      accept: "#FFFFFF",
      danger: "#FFFFFF",
    },
  },
  dark: {
    primary: "#bb86fc",
    secondary: "#03dac6",
    textPrimary: "#ffffff",
    textSecondary: "#cfcfcf",
    border: {
      initial: "#ffffff",
      hover: "#bb86fc",
      focus: "#bb86fc",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    statusColors: {
      canceled: "#E57373",
      pending: "#FFD54F",
      started: "#64B5F6",
      completed: "#81C784",
      ongoing: "#42A5F5",
    },
    roleColors: {
      member: "#BDBDBD",
      manager: "#FFD54F",
      admin: "#F44336",
    },
    taskTypeColors: {
      generalBooking: "#bb86fc",
      hotelBooking: "#03dac6",
      ticketBooking: "#64B5F6",
      planning: "#81C784",
      other: "#BDBDBD",
    },
    buttonColors: {
      accept: "#C0CA33",
      danger: "#FFB74D",
    },
    buttonTextColors: {
      accept: "#37474F",
      danger: "#5D4037",
    },
  },
});

export default appPalette;
