import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import NavLink from "components/NavLink";
import { NavBlur, NavMobile } from "components/styled";
import Logo from "assets/shared/logo.svg";
import IconHamburger from "assets/shared/icon-hamburger.svg";
import IconClose from "assets/shared/icon-close.svg";
import links from "constants/links";

const Nav = ({ size }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        height={96}
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          component="img"
          src={Logo}
          sx={{ height: 48, ml: { xs: "1.5rem", sm: "3.5rem", md: "3.5rem" }, width: 48 }}
        />
        {size === "mobile" && (
          <>
            {open ? (
              <Box
                onClick={() => setOpen(!open)}
                component="img"
                src={IconClose}
                sx={{
                  cursor: "pointer",
                  height: 21,
                  mr: "1.5rem",
                  width: 24,
                  position: "relative",
                  zIndex: 2,
                }}
              />
            ) : (
              <Box
                onClick={() => setOpen(!open)}
                component="img"
                src={IconHamburger}
                sx={{
                  cursor: "pointer",
                  height: 21,
                  mr: "1.5rem",
                  width: 24,
                  position: "relative",
                  zIndex: 2,
                }}
              />
            )}
          </>
        )}
        <NavBlur
          width={{ xs: null, sm: "75%", md: "65%", lg: "58%" }}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ display: size === "mobile" && "none" }}
        >
          <Box
            sx={{
              position: "absolute",
              left: [null, null, null, "-46%", "-53%"],
              background: "#979797",
              height: "1px",
              width: [null, null, null, "50%", "57%"],
            }}
          />
          {links &&
            links.map((link) => (
              <NavLink
                key={link.number}
                number={link.number}
                title={link.title}
                route={link.route}
                size={size}
              />
            ))}
        </NavBlur>
      </Stack>
      {size === "mobile" && (
        <NavMobile alignItems="center" open={open}>
          {links &&
            links.map((link) => (
              <Box key={link.number} sx={{ mb: 3, width: "70%" }}>
                <NavLink number={link.number} title={link.title} route={link.route} size={size} />
              </Box>
            ))}
        </NavMobile>
      )}
    </>
  );
};

export default Nav;
