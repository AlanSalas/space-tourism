import { Box, Stack, styled } from "@mui/material";

export const Page = styled(Box)(({ size }) => ({
  background: "#000000",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  paddingTop: size === "desktop" ? "2.5rem" : "0",
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
});

export const NavMobile = styled(Stack)(({ open }) => ({
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(81.5485px)",
  position: "absolute",
  top: "0",
  right: "0",
  height: "100%",
  paddingTop: "7rem",
  textAlign: "left",
  transform: open ? "translateX(0)" : "translateX(100%)",
  transition: "transform ease .5s",
  width: "70%",
}));

export const ActionMobile = styled(Box)({
  cursor: "pointer",
  height: "21px",
  marginRight: "1.5rem",
  width: "24px",
  position: "relative",
  zIndex: 2,
});

export const ButtonExplore = styled("button")({
  background: "#FFFFFF",
  border: "none",
  borderRadius: "100%",
  cursor: "pointer",
  height: "274px",
  outline: "none",
  transition: "outline ease .4s",
  width: "274px",
  "&:hover": {
    outline: "5.5rem solid rgba(255, 255, 255, 0.1)",
  },
});

export const Button = styled("button")({
  backgroundColor: "transparent",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "100%",
  color: "#FFFFFF",
  cursor: "pointer",
  height: "80px",
  outline: "none",
  transition: "border ease .4s, backgroundColor ease .4s",
  width: "80px",
  "&:hover": {
    border: "1px solid #FFFFFF",
  },
});

export const Divider = styled("hr")({
  background: "#383B4B",
});
