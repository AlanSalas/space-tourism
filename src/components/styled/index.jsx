import { Box, styled } from "@mui/material";
import HomeBackground from "assets/home/background-home-desktop.jpg";

export const Page = styled(Box)({
  backgroundImage: `url(${HomeBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  paddingTop: "2.5rem",
  width: "100%",
});

export const Container = styled(Box)({
  // border: "1px solid red",
  margin: "0 auto",
  maxWidth: "1110.5px",
  width: "100%",
});
