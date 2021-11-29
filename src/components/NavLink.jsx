import React from "react";
import { Typography } from "@mui/material";

const NavLink = ({ number, title }) => {
  return (
    <Typography
      variant="navText"
      sx={{ mr: [null, null, "1rem", "2rem", "3.5rem"], textTransform: "uppercase" }}
    >
      <Typography variant="navText" sx={{ mr: ".5rem", fontWeight: "bold" }}>
        {number}
      </Typography>
      {title}
    </Typography>
  );
};

export default NavLink;
