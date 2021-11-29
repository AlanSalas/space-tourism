import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Nav from "components/Nav";

const index = () => {
  return (
    <Box sx={{ height: "100vh", pt: "2.5rem" }}>
      <Nav />
      <Outlet />
    </Box>
  );
};

export default index;
