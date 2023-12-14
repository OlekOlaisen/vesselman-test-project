import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const MyBottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "profile", title: "Profile", icon: "profile" },
    { key: "home", title: "Home", icon: "home" },
    { key: "settings", title: "Settings", icon: "album" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: ProfileScreen,
    home: HomeScreen,
    settings: SettingsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyBottomNavigation;
