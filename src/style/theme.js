import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import * as Font from "expo-font";

/**
 * Loads the required fonts asynchronously.
 * @async
 * @function loadFonts
 * @returns {Promise<void>} A promise that resolves when the fonts are loaded.
 */
export async function loadFonts() {
  await Font.loadAsync({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../assets/fonts/Roboto-ThinItalic.ttf"),
  });
}

/* General colors for light theme */
const themeColorLight = {
  ...MD3LightTheme.colors,
  text: "#444444", // Assuming natural dark color for text
  primary: "#015052", // Primary color from your palette
  onPrimary: "#ffffff", // White text on primary color for readability
  primaryContainer: "#BFDFDF", // A slightly different shade for the container
  onPrimaryContainer: "#ffffff", // White text on primary container
  secondary: "#00a3a3", // Secondary color from your palette
  onSecondary: "#ffffff", // White text on secondary color
  secondaryContainer: "#9dc7c7", // A muted shade for secondary container
  onSecondaryContainer: "#9dc7c7", // White text on secondary container
  tertiary: "#2f3a1d", // A tertiary color derived from your semantic colors
  onTertiary: "#ffffff", // White text on tertiary color
  tertiaryContainer: "#5a6f3d", // A muted tertiary container color
  onTertiaryContainer: "#ffffff", // White text on tertiary container
  error: "#b00020", // Standard Material error color
  onError: "#ffffff", // White text on error color
  errorContainer: "#fcdedc", // A light shade of the error color
  onErrorContainer: "#b00020", // Error color text on error container
  background: "#f1f2f4", // Background color from your palette
  onBackground: "#BFDFDF", // Natural dark color for text on background
  surface: "#ffffff", // Foreground color from your palette
  onSurface: "#444444", // Natural dark color for text on surface
  surfaceVariant: "#e6e6e6", // A lighter shade for surface variant
  onSurfaceVariant: "#444444", // Natural dark color for text on surface variant
  outline: "#6f6f6f", // A muted color for outlines
  button: "#E5E5E5",
  elevation: {
    level0: "transparent",
    level1: "#f5f5f5", // Elevation for level 1
    level2: "#e0e0e0", // Elevation for level 2
    level3: "#cccccc", // Elevation for level 3
    level4: "#bdbdbd", // Elevation for level 4, slightly darker
    level5: "#acacac", // Elevation for level 5, even darker
  },
  surfaceDisabled: "rgba(29, 27, 30, 0.12)",
  onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
  backdrop: "rgba(51, 47, 55, 0.4)",
};

/* Font styling for light theme */
const themeFontsLight = {
  ...MD3LightTheme.fonts,
  bold: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 24,
    color: themeColorLight.text,
  },
  regular: {
    fontFamily: "Roboto-Regular",
    fontWeight: "normal",
    fontSize: 16,
    color: themeColorLight.text,
  },
  medium: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 16,
    color: themeColorLight.text,
  },
  light: {
    fontFamily: "Roboto-Light",
    fontWeight: "300",
    fontSize: 16,
    color: themeColorLight.text,
  },
  button: {
    fontFamily: "Roboto-Regular",
    fontWeight: "bold",
    fontSize: 16,
    color: themeColorLight.button,
    textAlign: 'center'
  },
};

/* General colors for dark theme */
const themeColorDark = {
  ...MD3DarkTheme.colors,
  text: "#E5E5E5", // A light color for text that contrasts with the dark background
  primary: "#DB932C", // Your chosen primary color
  onPrimary: "#2B2117", // A dark shade for text/icons on the primary color for readability
  primaryContainer: "#4D3C2F", // A darker shade of the primary color for containers
  onPrimaryContainer: "#FFDBB0", // A lighter shade of the primary color for text/icons on primary containers
  secondary: "#8A7E72", // A neutral secondary color that complements the primary
  onSecondary: "#E5E5E5", // Light text on secondary color
  secondaryContainer: "#655D53", // A darker shade for the secondary container
  onSecondaryContainer: "#DFD3C3", // A lighter shade for text/icons on secondary container
  tertiary: "#6D5F57", // A tertiary color that's a warm, muted brown
  onTertiary: "#E5E5E5", // Light text on tertiary color
  tertiaryContainer: "#4A4139", // A darker shade for the tertiary container
  onTertiaryContainer: "#D1C4B8", // A lighter shade for text/icons on the tertiary container
  error: "#CF6679", // A standard Material Design error color for dark themes
  onError: "#1E1214", // Dark text on error color for readability
  errorContainer: "#B3261E", // A darker shade for error container
  onErrorContainer: "#FADAD7", // A lighter shade for text on the error container
  background: "#273142", // A typical dark theme background color
  onBackground: "#374153",
  surface: "#121212", // Same as the background for cohesiveness
  onSurface: "#E5E5E5", // Light text on surface
  surfaceVariant: "#2c2c2c", // A slight variation for the surface variant
  onSurfaceVariant: "#E5E5E5", // Light text on the surface variant
  outline: "#93876C", // A muted color for outlines, derived from the primary color
  button: "#E5E5E5", // A button color that contrasts with the background
  elevation: {
    level0: "transparent",
    level1: "#1d1d1d",
    level2: "#222222",
    level3: "#272727",
    level4: "#2d2d2d",
    level5: "#323232",
  },
  surfaceDisabled: "rgba(219, 147, 44, 0.12)", // Using the primary color with reduced opacity
  onSurfaceDisabled: "rgba(219, 147, 44, 0.38)", // Using the primary color with higher opacity for text/icons
  backdrop: "rgba(28, 27, 31, 0.8)",
};

/* Font styling for dark theme */
const themeFontsDark = {
  ...MD3LightTheme.fonts,
  bold: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    color: themeColorDark.text,
    fontSize: 24,
  },
  regular: {
    fontFamily: "Roboto-Regular",
    fontWeight: "normal",
    fontSize: 16,
    color: themeColorDark.text,
  },
  medium: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 16,
    color: themeColorDark.text,
  },
  light: {
    fontFamily: "Roboto-Light",
    fontWeight: "300",
    fontSize: 16,
    color: themeColorDark.text,
  },
  button: {
    fontFamily: "Roboto-Regular",
    fontWeight: "bold",
    fontSize: 16,
    color: themeColorDark.button,
    textAlign: "center",
  },
};

/* Light theme that combines colors and fonts */
const lightTheme = {
  ...MD3LightTheme,
  colors: themeColorLight,
  fonts: themeFontsLight,
};

/* Dark theme that combines colors and fonts */
const darkTheme = {
  ...MD3DarkTheme,
  colors: themeColorDark,
  fonts: themeFontsDark,
};

export { lightTheme, darkTheme };
