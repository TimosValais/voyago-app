const navbarStyles = {
  container: {
    ml: 2,
    mt: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
  },
  leftMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rightMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  navLink: {
    fontSize: { xs: "0.8rem", sm: "1rem" },
    padding: { xs: "8px", sm: "12px" },
    margin: "0 10px",
    textDecoration: "none",
  },
  navIcon: {
    width: { xs: 20, sm: 25, md: 30 },
    height: { xs: 20, sm: 25, md: 30 },
    display: "block",
  },
  navButton: {
    fontSize: { xs: "0.8rem", sm: "1rem" },
    padding: { xs: "8px", sm: "12px" },
    margin: "0 10px",
    textDecoration: "none",
    color: "text.primary",
  },
};

export default navbarStyles;
