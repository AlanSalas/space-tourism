import { Box, Stack, styled } from "@mui/material";

export const Page = styled(Box)(({ background }) => ({
  background: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  paddingTop: "2.5rem",
  transition: "background ease .5s",
  width: "100%",
}));

export const Container = styled(Box)({
  margin: "0 auto",
  maxWidth: "1110.5px",
  width: "100%",
});

export const NavBlur = styled(Stack)({
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(81.5485px)",
  height: "100%",
  overflow: "visible",
  position: "relative",
  width: "58%",
});
