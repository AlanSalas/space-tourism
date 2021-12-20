import React, { useState } from "react";
import destinationsJson from "data/destinations.json";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "components/styled";
import { Divider } from "components/styled";
import { planets } from "constants/planets";

const Destination = () => {
  const [destinations] = useState(destinationsJson?.destinations);
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  const handleChangeDestination = (destination) => {
    const newDestination = destinations.find((dest) => dest.name === destination);
    setCurrentDestination(newDestination);
  };

  console.log(currentDestination);

  return (
    <Container sx={{ height: "100%" }}>
      <Stack direction="row" gap={19} sx={{ pb: 18 }}>
        <Box sx={{ pt: 9 }}>
          <Stack direction="row">
            <Typography variant="h5" sx={{ mr: 3, fontWeight: "bold", color: "tertiary.opacity" }}>
              01
            </Typography>
            <Typography variant="h5" sx={{ color: "tertiary.main" }}>
              PICK YOUR DESTINATION
            </Typography>
          </Stack>
          <Box component="img" src={planets[currentDestination.name]} sx={{ ml: 8, mt: 12 }} />
        </Box>
        <Box sx={{ maxWidth: "445px", mt: "auto" }}>
          <Stack direction="row" sx={{ mb: 6 }}>
            {destinations &&
              destinations.map((item) => (
                <Typography
                  onClick={() => handleChangeDestination(item.name)}
                  variant="navText"
                  key={item.name}
                  sx={{
                    borderBottom:
                      currentDestination.name === item.name
                        ? "3px solid #FFFFFF"
                        : "3px solid transparent",
                    color: "tertiary.main",
                    cursor: "pointer",
                    mr: "2.2rem",
                    "&:last-child": {
                      mr: 0,
                    },
                    // pt: size === "mobile" ? 0 : 4.5,
                    textTransform: "uppercase",
                    ":hover": {
                      borderBottom: "3px solid #979797",
                      transition: "border ease .5s",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
          </Stack>
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
            <Box sx={{ width: "50%" }}>
              <Typography variant="subtitle2" sx={{ color: "tertiary.main" }}>
                AVG. DISTANCE
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "tertiary.main" }}>
                {currentDestination.distance}
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography variant="subtitle2" sx={{ color: "tertiary.main" }}>
                EST. TRAVEL TIME
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "tertiary.main" }}>
                {currentDestination.travel}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Destination;
