import React, { useState } from "react";
import links from "constants/links";
import { Stack, Box } from "@mui/material";
import { NavBlur, NavMobile, ActionMobile } from "components/styled";
import { NavLink } from "components";
import Logo from "assets/shared/logo.svg";
import IconHamburger from "assets/shared/icon-hamburger.svg";
import IconClose from "assets/shared/icon-close.svg";

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
              <ActionMobile component="img" src={IconClose} onClick={() => setOpen(!open)} />
            ) : (
              <ActionMobile component="img" src={IconHamburger} onClick={() => setOpen(!open)} />
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
