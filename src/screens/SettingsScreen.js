import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/themeContext";


function SettingsScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { colors, fonts } = useTheme();

  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      backgroundColor: colors.primary,
      padding: 10,
      marginBottom: 5,
      width: 150,
      margin: 10,
      borderRadius: 10,
    },
    buttonText: {
      ...fonts.button,
    },
  });

  const handleLogout = () => {};

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
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

      <View style={styles.section}></View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingsScreen;
