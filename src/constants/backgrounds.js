// Home
import homeBackgroundDesk from "assets/home/background-home-desktop.jpg";
import homeBackgroundTablet from "assets/home/background-home-tablet.jpg";
import homeBackgroundMobile from "assets/home/background-home-mobile.jpg";
// Destination
import destBackgroundDesk from "assets/destination/background-destination-desktop.jpg";
import destBackgroundTablet from "assets/destination/background-destination-tablet.jpg";
import destBackgroundMobile from "assets/destination/background-destination-mobile.jpg";
// Crew
import crewBackgroundDesk from "assets/crew/background-crew-desktop.jpg";
import crewBackgroundTablet from "assets/crew/background-crew-tablet.jpg";
import crewBackgroundMobile from "assets/crew/background-crew-mobile.jpg";
// Technology
import techBackgroundDesk from "assets/technology/background-technology-desktop.jpg";
import techBackgroundTablet from "assets/technology/background-technology-tablet.jpg";
import techBackgroundMobile from "assets/technology/background-technology-mobile.jpg";

export const backgrounds = {
  "/": {
    desktop: homeBackgroundDesk,
    tablet: homeBackgroundTablet,
    mobile: homeBackgroundMobile,
  },
  "/destination": {
    desktop: destBackgroundDesk,
    tablet: destBackgroundTablet,
    mobile: destBackgroundMobile,
  },
  "/crew": {
    desktop: crewBackgroundDesk,
    tablet: crewBackgroundTablet,
    mobile: crewBackgroundMobile,
  },
  "/technology": {
    desktop: techBackgroundDesk,
    tablet: techBackgroundTablet,
    mobile: techBackgroundMobile,
  },
};
