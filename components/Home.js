import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../assets/colors/colors";
import Header from "./Header";

export default function Home({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text style={styles.text}>MERHABA :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: colors.green,
    textAlign: "center",
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 400,
  },
});
