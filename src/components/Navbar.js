import React from "react";
import { NavLink } from "react-router-dom";
import { IoCar, IoDiamond, IoLogIn } from "react-icons/io5";
import logo from "../images/logos/logo.png";
import { Box } from "@mui/material";
import navStyles from "../styles/navbarStyles";
import AppButton from "./AppButton";
import AppIcon from "./AppIcon";
import { useDefaultTypographySx } from "../styles/defaultStyles";

const Navbar = ({ toggleDarkMode, authToken, onLogout, username }) => {
  const defaultTypographySx = useDefaultTypographySx();

  return (
    <Box sx={navStyles.container} className="nav container" id="nav-menu">
      <Box sx={navStyles.leftMenu} className="left menu">
        <NavLink to="/" className="nav__logo">
          <Box
            component="img"
            src={logo}
            alt="App Logo"
            sx={navStyles.navIcon}
          />
        </NavLink>
        <NavLink to="/" className="nav__link">
          <AppButton
            text="Home"
            variant="text"
            color="primary"
            sx={navStyles.navButton}
            typographySx={defaultTypographySx}
          />
        </NavLink>
        <NavLink to="/about-us" className="nav__link">
          <AppButton
            text="About Us"
            variant="text"
            color="primary"
            sx={navStyles.navButton}
            typographySx={defaultTypographySx}
          />
        </NavLink>
        {authToken && (
          <>
            <NavLink to="/trips" className="nav__link">
              <AppButton
                text="Trips"
                variant="text"
                color="primary"
                sx={navStyles.navButton}
                typographySx={defaultTypographySx}
              />
            </NavLink>
            <NavLink to="/profile" className="nav__link">
              <AppButton
                text="Profile"
                variant="text"
                color="primary"
                sx={navStyles.navButton}
                typographySx={defaultTypographySx}
              />
            </NavLink>
          </>
        )}
      </Box>

      <Box sx={navStyles.rightMenu} className="right menu">
        <AppButton
          text={<AppIcon IconComponent={IoDiamond} />}
          variant="text"
          color="primary"
          onClick={toggleDarkMode}
          sx={navStyles.navButton}
          typographySx={defaultTypographySx}
        />
        {authToken ? (
          <>
            <NavLink
              to="/profile"
              className="nav__link"
              style={{ textDecoration: "none" }}
            >
              <AppButton
                text={<AppIcon IconComponent={IoCar} />}
                variant="text"
                color="primary"
                sx={navStyles.navButton}
                typographySx={defaultTypographySx}
              />
            </NavLink>
            <AppButton
              text="Logout"
              variant="text"
              color="primary"
              onClick={onLogout}
              sx={navStyles.navButton}
              typographySx={defaultTypographySx}
            />
          </>
        ) : (
          <NavLink to="/login" className="nav__link">
            <AppButton
              text={<AppIcon IconComponent={IoLogIn} />}
              variant="text"
              color="primary"
              sx={navStyles.navButton}
              typographySx={defaultTypographySx}
            />
          </NavLink>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
