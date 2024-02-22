import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";
import { globalStyles } from "../../CssVariables/Variables";
import { useFonts } from "expo-font";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";

const LandingScreen = () => {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });
  if (!fontsLoaded) return <Text>Loading...</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.branding}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={styles.brandingContainer}>
        <Text style={styles.brandingTitle}>GenZ Hub</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.defaultBgColor,
    justifyContent: "center",
    alignItems: "center",
  },
  branding: {
    width: 140,
    height: 140,
    backgroundColor: globalStyles.defaultBgColor,
    borderRadius: 150 / 2,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 3, height: 8 },
        shadowColor: "rgba(0, 0, 0, 0.160784)",
        shadowOpacity: 0,
        shadowRadius: 2,
      },
      android: {
        elevation: 7,
      },
    }),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  brandingTitle: {
    fontSize: 52,
    fontFamily: "Raleway_700Bold",
    color: globalStyles.primaryTextColor,
  },
});

export default LandingScreen;
