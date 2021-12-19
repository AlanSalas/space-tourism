import React, { useState } from "react";
import destinationsJson from "data/destinations.json";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "components/styled";
import MoonImage from "assets/destination/image-moon.png";
import { Divider } from "components/styled";

const Destination = () => {
  const [destinations, setDestinations] = useState(destinationsJson?.destinations);

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
          <Box component="img" src={MoonImage} sx={{ ml: 8, mt: 12 }} />
        </Box>
        <Box sx={{ maxWidth: "445px", pt: 21.5 }}>
          <Stack direction="row" sx={{ mb: 6 }}>
            {destinations &&
              destinations.map((item) => (
                <Typography
                  variant="navText"
                  key={item.name}
                  sx={{
                    // borderBottom: "3px solid #FFFFFF" : "3px solid transparent",
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
            MOON
          </Typography>
          <Typography component="p" variant="bodyText" sx={{ color: "tertiary.main", mb: 6 }}>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help
            regain perspective and come back refreshed. While you’re there, take in some history by
            visiting the Luna 2 and Apollo 11 landing sites.
          </Typography>
          <Divider sx={{ mb: 3.5 }} />
          <Stack direction="row">
            <Box sx={{ width: "50%" }}>
              <Typography variant="subtitle2" sx={{ color: "tertiary.main" }}>
                AVG. DISTANCE
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "tertiary.main" }}>
                384,400 KM
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography variant="subtitle2" sx={{ color: "tertiary.main" }}>
                EST. TRAVEL TIME
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "tertiary.main" }}>
                3 DAYS
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Destination;
