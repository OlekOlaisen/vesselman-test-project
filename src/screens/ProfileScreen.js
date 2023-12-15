import React, { useContext } from "react";
import { useTheme } from "react-native-paper";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemeContext } from "../context/themeContext";
import ProfileIcon from "../assets/profileIcon.svg";


function ProfileScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 20,
  },
 profileImage: {
  width: 150,
 },
  profileName: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileEmail: {
    color: colors.text,
    fontSize: 16,
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

      

      <Text style={styles.profileName}>Name: John Doe</Text>
      <Text style={styles.profileEmail}>Email: john.doe@example.com</Text>
    </View>
  );
}

export default ProfileScreen;
