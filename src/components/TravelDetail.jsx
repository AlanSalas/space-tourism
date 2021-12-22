import React from "react";
import { Box, Typography } from "@mui/material";

const TravelDetail = ({ title, value }) => {
  return (
    <Box sx={{ width: "50%" }}>
      <Typography variant="subtitle2" sx={{ color: "tertiary.main" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "tertiary.main" }}>
        {value}
      </Typography>
    </Box>
  );
};

export default TravelDetail;
