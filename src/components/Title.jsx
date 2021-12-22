import React from "react";
import { Stack, Typography } from "@mui/material";

const Title = ({ number, title, ...rest }) => {
  return (
    <Stack direction="row" sx={rest.sx}>
      <Typography variant="h5" sx={{ mr: 3, fontWeight: "bold", color: "tertiary.opacity" }}>
        {number}
      </Typography>
      <Typography variant="h5" sx={{ color: "tertiary.main" }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default Title;
