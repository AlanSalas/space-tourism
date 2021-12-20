import React, { useState } from "react";
import crewJson from "data/crew.json";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "components/styled";
import { crews } from "constants/planets";

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
          <Stack direction="row" sx={{ mb: 19 }}>
            <Typography variant="h5" sx={{ mr: 3, fontWeight: "bold", color: "tertiary.opacity" }}>
              02
            </Typography>
            <Typography variant="h5" sx={{ color: "tertiary.main" }}>
              MEET YOUR CREW
            </Typography>
          </Stack>
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
                <Box
                  key={item.name}
                  onClick={() => handleChangeCrew(item.name)}
                  component="span"
                  sx={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "100%",
                    backgroundColor:
                      currentCrew.name === item.name ? "tertiary.main" : "tertiary.opacity",
                    cursor: "pointer",
                  }}
                />
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
