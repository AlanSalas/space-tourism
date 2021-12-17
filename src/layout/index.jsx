import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Page } from "components/styled";
import Nav from "components/Nav";
import { backgrounds } from "constants/backgrounds";

const Layout = () => {
  const location = useLocation();
  const desktop = useMediaQuery("(min-width:768px)") && "desktop";
  const tablet = useMediaQuery("(min-width:375px)") && "tablet";
  const mobile = useMediaQuery("(max-width:375px)") && "mobile";
  const size = desktop || tablet || mobile;
  const sizes = backgrounds[location.pathname];
  const background = sizes[size];

  return (
    <Page background={background && background}>
      <Nav />
      <Outlet />
    </Page>
  );
};

export default Layout;
