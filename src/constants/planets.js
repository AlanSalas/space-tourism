// Planets
import ImageMoon from "assets/destination/image-moon.png";
import ImageMars from "assets/destination/image-mars.png";
import ImageEuropa from "assets/destination/image-europa.png";
import ImageTitan from "assets/destination/image-titan.png";

// Crews
import CrewOne from "assets/crew/image-douglas-hurley.png";
import CrewTwo from "assets/crew/image-mark-shuttleworth.png";
import CrewThree from "assets/crew/image-victor-glover.png";
import CrewFour from "assets/crew/image-anousheh-ansari.png";

// Technologies portrait
import TechOnePortrait from "assets/technology/image-launch-vehicle-portrait.jpg";
import TechTwoPortrait from "assets/technology/image-spaceport-portrait.jpg";
import TechThreePortrait from "assets/technology/image-space-capsule-portrait.jpg";

export const planets = {
  Moon: ImageMoon,
  Mars: ImageMars,
  Europa: ImageEuropa,
  Titan: ImageTitan,
};

export const crews = {
  "Douglas Hurley": CrewOne,
  "Mark Shuttleworth": CrewTwo,
  "Victor Glover": CrewThree,
  "Anousheh Ansari": CrewFour,
};

export const technologyImages = {
  "Launch vehicle": {
    portrait: TechOnePortrait,
  },
  Spaceport: {
    portrait: TechTwoPortrait,
  },
  "Space capsule": {
    portrait: TechThreePortrait,
  },
};
