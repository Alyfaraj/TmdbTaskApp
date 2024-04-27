import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Navigation from './src/navigation'
import { useFavoriteStore } from "./src/store";
import { storage } from "./src/services/storage";
import { Splash } from "./src/screens";
if (__DEV__) {
  require("./src/services/reactron");

}
const App = () => {
  const { setFavorites } = useFavoriteStore()
  const [show, setShow] = useState(true);


  // load data from local storage to state management at first time to load
  useEffect(() => {
    setFavorites(JSON.parse(storage.getString('favorites') || '[]'))
  }, [])



  useEffect(() => {
    clearTimeout(timeout);
    let timeout = setTimeout(() => {
      setShow(false);
    }, 2000);

  }, []);


  if (show) return <Splash />;


  return (
    <View style={{ flex: 1 }} >
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
