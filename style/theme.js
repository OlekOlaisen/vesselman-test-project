import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4f83cc", // A soft blue
    accent: "#e91e63", // Bright pink for highlights
    background: "#ffffff", // Pure white background
    surface: "#f6f6f6", // Light grey for UI surfaces
    text: "#333333", // Dark grey for text for readability

  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#bb86fc", // A muted purple
    accent: "#03dac6", // A teal for highlights
    background: "#121212", // Very dark grey, almost black
    surface: "#1e1e1e", // Dark grey for UI surfaces
    text: "#ffffff", // Pure white for text for readability

  },
};

export { lightTheme, darkTheme };
