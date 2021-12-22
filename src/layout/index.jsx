import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { backgrounds } from "constants/backgrounds";
import { useMediaQuery } from "@mui/material";
import { Page } from "components/styled";
import Nav from "components/Nav";

const Layout = () => {
  const location = useLocation();
  const desktop = useMediaQuery("(min-width:769px)") && "desktop";
  const tablet = useMediaQuery("(min-width:482px)") && "tablet";
  const mobile = useMediaQuery("(max-width:481px)") && "mobile";
  const size = desktop || tablet || mobile;
  const sizes = backgrounds[location.pathname];
  const background = sizes[size];

  return (
    <>
      {background && (
        <Page sx={{ backgroundImage: `url(${background})` }} size={size}>
          <Nav size={size.toString()} />
          <Outlet />
        </Page>
      )}
    </>
  );
};

export default Layout;
