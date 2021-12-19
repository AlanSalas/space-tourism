import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Container, ButtonExplore } from "components/styled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ height: "100%" }}>
      <Stack direction="row" justifyContent="space-between" sx={{ pb: 18 }}>
        <Box sx={{ maxWidth: "450px", pt: 31 }}>
          <Typography sx={{ color: "tertiary.main", mb: 2 }} variant="h5">
            SO, YOU WANT TO TRAVEL TO
          </Typography>
          <Typography sx={{ color: "tertiary.main", mb: 3.5 }} variant="h1">
            SPACE
          </Typography>
          <Typography sx={{ color: "tertiary.main" }} variant="bodyText">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </Typography>
        </Box>
        <ButtonExplore onClick={() => navigate("/destination")}>
          <Typography variant="h4">EXPLORE</Typography>
        </ButtonExplore>
      </Stack>
    </Container>
  );
};

export default Home;
