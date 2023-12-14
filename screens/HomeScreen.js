import { View, Text, Switch } from "react-native";
import { useTheme } from "react-native-paper";
import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function HomeScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Text style={{ color: colors.text }}>
        {isDarkTheme ? "Dark Theme" : "Light Theme"}
      </Text>
      <Switch
        trackColor={{ false: colors.surface, true: colors.surface }}
        thumbColor={isDarkTheme ? colors.primary : colors.primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsDarkTheme(!isDarkTheme)}
        value={isDarkTheme}
      />
    </View>
  );
}

export default HomeScreen;
