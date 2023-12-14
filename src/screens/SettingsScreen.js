import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { View, Text, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "../context/themeContext";

function SettingsScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    icon: {
      color: colors.primary,
    },
    bar: {
      backgroundColor: colors.background,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: colors.background,
      }}
    >
      <View style={styles.buttonContainer}>
        <Text style={{ color: colors.text }}>
          {isDarkTheme ? "Dark Theme" : "Light Theme"}
        </Text>
        <Switch
          trackColor={{
            false: colors.primaryContainer,
            true: colors.primaryContainer,
          }}
          thumbColor={isDarkTheme ? colors.primary : colors.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsDarkTheme(!isDarkTheme)}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;
