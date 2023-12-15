import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { lightTheme, darkTheme } from "./src/style/theme";
import { ThemeContext } from "./src/context/themeContext";
import NavigationTabs from "./src/components/NavigationTabs";
import * as Font from "expo-font";
import { loadFonts } from "./src/style/theme";



function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadAll() {
      await loadFonts();
      setFontsLoaded(true);
    }

    loadAll();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }
  

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <StatusBar
          barStyle={isDarkTheme ? "light-content" : "dark-content"}
          backgroundColor={
            isDarkTheme
              ? darkTheme.colors.onBackground
              : lightTheme.colors.onBackground
          }
        />
        <NavigationContainer>
          <NavigationTabs />
        </NavigationContainer>
      </ThemeContext.Provider>
    </PaperProvider>
  );
}

export default App;
