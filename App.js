import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { lightTheme, darkTheme } from "./style/theme";
import { ThemeContext } from "./context/themeContext";
import MyBottomNavigation from  "./components/BottomNavigation";
import NavigationTabs from "./components/NavigationTabs";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <NavigationContainer>
          <NavigationTabs/>
        </NavigationContainer>
      </ThemeContext.Provider>
    </PaperProvider>
  );
}

export default App;
