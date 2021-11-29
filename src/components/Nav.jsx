import React from "react";
import { Stack, Box, styled } from "@mui/material";
import NavLink from "components/NavLink";
import Logo from "assets/shared/logo.svg";
import links from "constants/links";

const NavBlur = styled(Stack)({
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(81.5485px)",
  height: "100%",
  overflow: "visible",
  position: "relative",
  width: "58%",
});

const Nav = () => {
  return (
    <Stack
      height={96}
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box component="img" src={Logo} sx={{ height: 48, ml: "3.5rem", width: 48 }} />
      <NavBlur direction="row" alignItems="center" justifyContent="center">
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
            <NavLink key={link.number} number={link.number} title={link.title} route={link.route} />
          ))}
      </NavBlur>
    </Stack>
  );
};

export default Nav;
