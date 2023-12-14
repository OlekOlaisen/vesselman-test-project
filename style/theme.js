import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4f83cc", 
    accent: "#e91e63", 
    background: "#ffffff", 
    surface: "#f6f6f6", 
    text: "#333333", 

  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#bb86fc", 
    accent: "#03dac6", 
    background: "#121212", 
    surface: "#1e1e1e", 
    text: "#ffffff", 

  },
};

export { lightTheme, darkTheme };
