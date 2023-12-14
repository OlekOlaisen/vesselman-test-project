import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const MyBottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "details", title: "Details", icon: "album" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    details: DetailsScreen,
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
