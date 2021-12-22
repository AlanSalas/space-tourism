import React, { useState } from "react";
import technologyJson from "data/technology.json";
import { technologyImages } from "constants/planets";
import { Box, Stack, Typography } from "@mui/material";
import { Container, Button } from "components/styled";
import { Title } from "components";

const Technology = () => {
  const [technologies] = useState(technologyJson?.technology);
  const [currentTech, setCurrentTech] = useState(technologies[0]);
  const [techImage, setTechImage] = useState(technologyImages[currentTech?.name]);

  const handleChangeTechnology = (techName) => {
    const newTechnology = technologies.find((tech) => tech.name === techName);
    setCurrentTech(newTechnology);
    setTechImage(technologyImages[newTechnology.name]);
  };

  return (
    <Container sx={{ margin: "0 0 0 auto", maxWidth: "88.5%" }}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ pt: 9 }}>
          <Title sx={{ mb: 17 }} number="03" title="SPACE LAUNCH 101" />
          <Stack direction="row" gap={10}>
            <Stack gap={4}>
              {technologies &&
                technologies.map((item, index) => (
                  <Button
                    key={item.name}
                    sx={{ backgroundColor: currentTech.name === item.name && "tertiary.main" }}
                    onClick={() => handleChangeTechnology(item.name)}
                  >
                    <Typography
                      sx={{ color: currentTech.name === item.name && "primary.main" }}
                      variant="h4"
                    >
                      {index + 1}
                    </Typography>
                  </Button>
                ))}
            </Stack>
            <Box>
              <Typography variant="navText" sx={{ color: "tertiary.main" }}>
                THE THERMINOLOGY...
              </Typography>
              <Typography variant="h3" sx={{ color: "tertiary.main", mt: 1, mb: 2 }}>
                {currentTech.name}
              </Typography>
              <Typography
                component="p"
                variant="bodyText"
                sx={{ color: "tertiary.main", maxWidth: "400px" }}
              >
                {currentTech.description}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ pt: 17 }}>
          <Box component="img" src={techImage.portrait} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Technology;
