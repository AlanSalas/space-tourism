import React, { useState } from "react";
import destinationsJson from "data/destinations.json";
import { planets } from "constants/planets";
import { Box, Stack, Typography } from "@mui/material";
import { Container, Divider } from "components/styled";
import { Title, SubMenu, TravelDetail } from "components";

const Destination = () => {
  const [destinations] = useState(destinationsJson?.destinations);
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  const handleChangeDestination = (destination) => {
    const newDestination = destinations.find((dest) => dest.name === destination);
    setCurrentDestination(newDestination);
  };

  return (
    <Container sx={{ height: "100%" }}>
      <Stack direction="row" gap={19}>
        <Box sx={{ pt: 9 }}>
          <Title number="01" title="PICK YOUR DESTINATION" />
          <Box component="img" src={planets[currentDestination.name]} sx={{ ml: 8, mt: 12 }} />
        </Box>
        <Box sx={{ maxWidth: "445px", mt: "auto" }}>
          <SubMenu
            items={destinations}
            currentItem={currentDestination.name}
            onClick={handleChangeDestination}
          />
          <Typography variant="h2" sx={{ color: "tertiary.main", mb: 1.5 }}>
            {currentDestination.name}
          </Typography>
          <Typography
            component="p"
            variant="bodyText"
            sx={{ color: "tertiary.main", mb: 6, maxWidth: "400px" }}
          >
            {currentDestination.description}
          </Typography>
          <Divider sx={{ mb: 3.5 }} />
          <Stack direction="row">
            <TravelDetail title="AVG. DISTANCE" value={currentDestination.distance} />
            <TravelDetail title="EST. TRAVEL TIME" value={currentDestination.travel} />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Destination;
