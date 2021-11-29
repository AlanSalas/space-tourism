import React from "react";
import { Outlet } from "react-router-dom";
import { Page } from "components/styled";
import Nav from "components/Nav";

const Layout = () => {
  return (
    <Page>
      <Nav />
      <Outlet />
    </Page>
  );
};

export default Layout;
