import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class ListScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{ padding: 15 }}
          onPress={this.props.navigation.openDrawer}
        >
          <FontAwesome5 name="bars" size={24} color="#161924" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text>Calendar Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
