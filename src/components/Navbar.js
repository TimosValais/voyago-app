import React from "react";
import { NavLink } from "react-router-dom";
import { IoCar, IoDiamond, IoLogIn } from "react-icons/io5";
import logo from "../images/logos/logo.png";
import { Box } from "@mui/material";
import navStyles from "../styles/navbarStyles";
import AppButton from "./AppButton";
import AppIcon from "./AppIcon";

const Navbar = ({ toggleDarkMode, authToken, onLogout, username }) => {
  console.log(username);
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
            typographySx={{
              color: "text.primary",
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
            typographySx={{
              color: "text.primary",
            }}
          />
        </NavLink>
        {authToken && (
          <>
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
                typographySx={{
                  color: "text.primary",
                }}
              />
            </NavLink>
            <NavLink to="/profile" className="nav__link">
              <AppButton
                text="Profile"
                variant="text"
                color="primary"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  padding: { xs: "8px", sm: "12px" },
                  margin: "0 10px",
                  textDecoration: "none",
                }}
                typographySx={{
                  color: "text.primary",
                }}
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
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem" },
            padding: { xs: "8px", sm: "12px" },
            margin: "0 10px",
            textDecoration: "none",
          }}
          typographySx={{
            color: "text.primary",
          }}
        />
        {authToken ? (
          <>
            <NavLink
              to="/profile"
              className="nav__link"
              style={{ textDecoration: "none", margin: "0 10px" }}
            >
              <AppButton
                text={<AppIcon IconComponent={IoCar} />}
                variant="text"
                color="primary"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  padding: { xs: "8px", sm: "12px" },
                  margin: "0 10px",
                  textDecoration: "none",
                }}
                typographySx={{
                  color: "text.primary",
                }}
              />
            </NavLink>
          </>
        ) : (
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
              typographySx={{
                color: "text.primary",
              }}
            />
          </NavLink>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
