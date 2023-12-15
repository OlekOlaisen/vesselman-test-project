import React, { useState } from "react";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { lightTheme, darkTheme } from "./src/style/theme";
import { ThemeContext } from "./src/context/themeContext";
import NavigationTabs from "./src/components/NavigationTabs";


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  

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
