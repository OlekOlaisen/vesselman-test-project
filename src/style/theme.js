import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

const lightTheme = {
  ...MD3LightTheme,
  colors: {
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
    // ... other colors and properties
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
  },
  fonts: {
    ...MD3LightTheme.fonts,
    regular: {
      fontFamily: "Roboto",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Roboto",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Roboto",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Roboto",
      fontWeight: "100",
    },
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
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
  },
  fonts: {
    ...MD3LightTheme.fonts,
    regular: {
      fontFamily: "Roboto",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Roboto",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Roboto",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Roboto",
      fontWeight: "100",
    },
  },
};

export { lightTheme, darkTheme };
