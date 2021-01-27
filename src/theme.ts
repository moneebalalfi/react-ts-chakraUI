import { extendTheme, theme } from "@chakra-ui/react";

const myCustomTheme = {
  ...theme,
  styles: {
    global: {
      body: {},
    },
  },
  fonts: {
    body: "'Kanit', sans-serif, system-ui",
    heading: "'kanit', sans-serif, system-ui",
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

const customTheme = extendTheme(myCustomTheme);
export default customTheme;
