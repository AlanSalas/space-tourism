import React from "react";
import { Box } from "@mui/material";

const Dot = ({ item, currentItem, onClick }) => {
  return (
    <Box
      key={item.name}
      onClick={() => onClick(item.name)}
      component="span"
      sx={{
        backgroundColor: currentItem === item.name ? "tertiary.main" : "tertiary.opacity",
        borderRadius: "100%",
        cursor: "pointer",
        height: "20px",
        width: "20px",
      }}
    />
  );
};

export default Dot;
