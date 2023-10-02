import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

export default function Header({ navigation }) {
  const goBack = () => {
    navigation.navigate("App");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Ionicons name="chevron-back" size={30} color={colors.green} />
          <Text style={styles.text}>Назад</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "green",
  },
  button: {
    flexDirection: "row",
    marginTop: 7,
  },
  text: {
    marginTop: 3,
    fontSize: 22,
    fontWeight: "600",
    color: colors.green,
  },
});
