import React from "react";
import { Stack, Typography } from "@mui/material";

const SubMenu = ({ items, currentItem, onClick }) => {
  return (
    <Stack direction="row" sx={{ mb: 6 }}>
      {items &&
        items.map((item) => (
          <Typography
            onClick={() => onClick(item.name)}
            variant="navText"
            key={item.name}
            sx={{
              borderBottom:
                currentItem === item.name ? "3px solid #FFFFFF" : "3px solid transparent",
              color: "tertiary.main",
              cursor: "pointer",
              mr: "2.2rem",
              "&:last-child": {
                mr: 0,
              },
              textTransform: "uppercase",
              transition: "border ease .5s",
              ":hover": {
                borderBottom: "3px solid #979797",
              },
            }}
          >
            {item.name}
          </Typography>
        ))}
    </Stack>
  );
};

export default SubMenu;
