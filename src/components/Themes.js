import eiffelImg from "../../src/assets/tour-eiffel.jpeg";

export const lightTheme = {
  textColor: "navy",
  linkColor: "white",
  linkBackground: "navy",
  bodyBackground:
    "linear-gradient(225deg,rgba(230, 224, 224, 0.8),rgba(219, 238, 250, 0.8))",
  homeBackground: `linear-gradient(90deg,hsla(0, 0%, 99%, 0.8),rgba(219, 211, 211, 0.8)),url("${eiffelImg}")`,
  buttonText: "lightgray",
  buttonBackground: "navy",
  sideBarBackground: "white",
  sideBarText: "black",
  linkText: "navy",
  navBackground: "navy",
  navText: "white",
};

export const darkTheme = {
  textColor: "white",
  linkColor: "black",
  linkBackground: "white",
  bodyBackground:
    "linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9))",
  homeBackground:
    "linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9))",
  buttonText: "black",
  buttonBackground: "lightgray",
  sideBarBackground: "white",
  sideBarText: "black",
  linkText: "white",
  navBackground: "white",
  navText: "black",
};