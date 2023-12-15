import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { View, Text, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { Button } from "react-native";

function SettingsScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { colors, fonts } = useTheme();

  const styles = StyleSheet.create({});

  const handleLogout = () => {};

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
        <Text style={{ ...fonts.regular }}>
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

      <View style={styles.section}></View>

      <View style={styles.section}>
        <Text style={{ ...fonts.regular }}>Notifications</Text>
        <Switch
          trackColor={{ false: colors.primaryContainer, true: colors.primary }}
          thumbColor={isDarkTheme ? colors.secondary : colors.primary}
        />
      </View>

      <Button title="Log out" onPress={handleLogout} color={colors.primary} />
    </View>
  );
}

export default SettingsScreen;
