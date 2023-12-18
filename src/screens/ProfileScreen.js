import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemeContext } from "../context/themeContext";
import ProfileIcon from "../assets/profileIcon.svg";


function ProfileScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { colors, fonts } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      padding: 20,
    },
    profile_Image: {
      width: 150,
    },
    profile_Name: {
      ...fonts.bold,
      marginBottom: 5,
    },
    profile_Email: {
      ...fonts.regular,
      marginBottom: 10,
    },
    profile_Phone: {
      ...fonts.regular,
      marginBottom: 10,
    },
    profile_Position: {
      ...fonts.regular,
      marginBottom: 10,
    },
  });


  return (
    <View style={styles.container}>
      <ProfileIcon
        width={120}
        height={120}
        preserveAspectRatio="xMidYMid slice"
        stroke={colors.primary}
        fill={colors.primary}
        strokeWidth={1}
      />
      <Text style={styles.profile_Name}>John Doe</Text>
      <Text style={styles.profile_Position}>Ship Captain</Text>
      <Text style={styles.profile_Email}>john.doe@example.com</Text>
      <Text style={styles.profile_Phone}>+47 919 99 999</Text>
    </View>
  );
}

export default ProfileScreen;
