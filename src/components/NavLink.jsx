import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const NavLink = ({ number, title, route, size }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Typography
      onClick={() => navigate(route)}
      variant="navText"
      sx={{
        borderBottom: location.pathname === route ? "3px solid #FFFFFF" : "3px solid transparent",
        color: "tertiary.main",
        cursor: "pointer",
        height: size === "mobile" ? null : "100%",
        mr: [null, "1rem", "1rem", "2rem", "3.5rem"],
        "&:last-child": {
          mr: 0,
        },
        pt: size === "mobile" ? 0 : 4.5,
        textTransform: "uppercase",
        ":hover": {
          borderBottom: "3px solid #979797",
          transition: "border ease .5s",
        },
      }}
    >
      {size !== "tablet" && (
        <Typography variant="navText" sx={{ mr: ".5rem", fontWeight: "bold" }}>
          {number}
        </Typography>
      )}
      {title}
    </Typography>
  );
};

export default NavLink;
