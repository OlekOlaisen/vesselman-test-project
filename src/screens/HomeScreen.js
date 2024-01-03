import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
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
    row: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    button: {
      backgroundColor: colors.primary,
      padding: 10,
      marginBottom: 5,
      width: 150,
      height: 150,
      margin: 10,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      ...fonts.button,
    },
  });


 return (
   <ScrollView
     style={{
       flex: 1,
       backgroundColor: colors.background,
     }}
   >
     <View style={styles.row}>
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
     </View>

     <View style={styles.row}>
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
     </View>

     <View style={styles.row}>
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
     </View>

     <View style={styles.row}>
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
     </View>
     <View style={styles.row}>
       <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("Profile")}
       >
         <Text style={styles.buttonText}>Risk</Text>
       </TouchableOpacity>
     </View>
   </ScrollView>
 );
}

export default HomeScreen;
