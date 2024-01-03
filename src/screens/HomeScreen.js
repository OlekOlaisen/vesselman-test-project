import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function HomeScreen({navigation}) {
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


 return (
   <View
     style={{
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       backgroundColor: colors.background,
     }}
   >
     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Specification</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Task Manager</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Inspection</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Vessels</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Procedures</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Issues</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Project</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Maintenance</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("Profile")}
     >
       <Text style={styles.buttonText}>Risk</Text>
     </TouchableOpacity>
   </View>
 );
}

export default HomeScreen;
