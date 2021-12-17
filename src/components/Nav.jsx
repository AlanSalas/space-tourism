import React from "react";
import { Stack, Box } from "@mui/material";
import NavLink from "components/NavLink";
import { NavBlur } from "components/styled";
import Logo from "assets/shared/logo.svg";
import links from "constants/links";

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
