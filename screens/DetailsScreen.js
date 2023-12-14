import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { View, Text } from "react-native";
import { ThemeContext } from "../context/themeContext";

function DetailsScreen() {
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
      <Text style={{ color: colors.text }}>Details Screen</Text>
    </View>
  );
}

export default DetailsScreen;
