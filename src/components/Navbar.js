import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import logo from "../images/logos/logo.png";
import { Box } from "@mui/material";
import navStyles from "../styles/navbarStyles";
import AppButton from "./AppButton";
import AppIcon from "./AppIcon";

const Navbar = () => {
  return (
    <Box sx={navStyles.container} className="nav container" id="nav-menu">
      <Box sx={navStyles.leftMenu} className="left menu">
        <NavLink to="/" className="nav__logo">
          <Box
            component="img"
            src={logo}
            alt="App Logo"
            sx={{
              width: { xs: 20, sm: 25, md: 30 },
              height: { xs: 20, sm: 25, md: 30 },
              display: "block",
            }}
          />
        </NavLink>
        <NavLink to="/" className="nav__link">
          <AppButton
            text="Home"
            variant="text"
            color="primary"
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              padding: { xs: "8px", sm: "12px" },
              margin: "0 10px",
              textDecoration: "none",
            }}
            typographyProps={{
              variant: "body1",
              component: "span",
            }}
          />
        </NavLink>
        <NavLink to="/about-us" className="nav__link">
          <AppButton
            text="About Us"
            variant="text"
            color="primary"
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              padding: { xs: "8px", sm: "12px" },
              margin: "0 10px",
              textDecoration: "none",
            }}
            typographyProps={{
              variant: "body1",
              component: "span",
            }}
          />
        </NavLink>
        <NavLink to="/trips" className="nav__link">
          <AppButton
            text="Trips"
            variant="text"
            color="primary"
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              padding: { xs: "8px", sm: "12px" },
              margin: "0 10px",
              textDecoration: "none",
            }}
            typographyProps={{
              variant: "body1",
              component: "span",
            }}
          />
        </NavLink>
      </Box>

      <Box sx={navStyles.rightMenu} className="right menu">
        <NavLink to="/login" className="nav__link">
          <AppButton
            text={<AppIcon IconComponent={IoLogIn} />}
            variant="text"
            color="primary"
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              padding: { xs: "8px", sm: "12px" },
              margin: "0 10px",
              textDecoration: "none",
            }}
            typographyProps={{
              variant: "body1",
              component: "span",
            }}
          />
        </NavLink>
      </Box>
    </Box>
  );
};

export default Navbar;
