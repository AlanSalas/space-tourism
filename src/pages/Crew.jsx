import React, { useState } from "react";
import crewJson from "data/crew.json";
import { crews } from "constants/planets";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "components/styled";
import { Title, Dot } from "components";

const Crew = () => {
  const [crew] = useState(crewJson?.crew);
  const [currentCrew, setCurrentCrew] = useState(crew[0]);

  const handleChangeCrew = (crewName) => {
    const newCrew = crew.find((item) => item.name === crewName);
    setCurrentCrew(newCrew);
  };

  return (
    <Container sx={{ height: "90%" }}>
      <Stack direction="row" justifyContent="space-between" height="100%">
        <Box sx={{ pt: 9, height: "100%" }}>
          <Title sx={{ mb: 19 }} number="02" title="MEET YOUR CREW" />
          <Typography variant="h4" sx={{ color: "tertiary.opacity", mb: 2 }}>
            {currentCrew.role}
          </Typography>
          <Typography variant="h3" sx={{ color: "tertiary.main", mb: 3 }}>
            {currentCrew.name}
          </Typography>
          <Typography
            component="p"
            variant="bodyText"
            sx={{ color: "tertiary.main", height: "160px", maxWidth: "400px", mb: 11 }}
          >
            {currentCrew.bio}
          </Typography>
          <Stack direction="row" gap={2.5}>
            {crew &&
              crew.map((item) => (
                <Dot item={item} currentItem={currentCrew.name} onClick={handleChangeCrew} />
              ))}
          </Stack>
        </Box>
        <Box sx={{ mt: "auto" }}>
          <Box component="img" src={crews[currentCrew.name]} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Crew;
