import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function HomeScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { colors, fonts } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text
        style={{
          ...fonts.regular,
        }}
      >
        Home
      </Text>
    </View>
  );
}

export default HomeScreen;
