import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import * as firebase from "firebase";

export default class RegisterScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null,
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/long.jpg")}
        style={styles.image}
        animation={"adeInUpBig"}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}></Text>
          </View>

          <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
            <Text style={[styles.text_footer, { marginTop: 35 }]}>
              Username
            </Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter Username"
                style={styles.textInput}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              />

              <Feather name="check-circle" color="green" size={20} />
            </View>

            <Text style={[styles.text_footer, { marginTop: 35 }]}>Email</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter Email"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />

              <Feather name="check-circle" color="green" size={20} />
            </View>

            <Text style={[styles.text_footer, { marginTop: 35 }]}>
              Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />

              <TextInput
                placeholder="Enter Password"
                secureTextEntry={true}
                style={styles.textInput}
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />

              <TouchableOpacity onPress={this.handleSignUp}>
                <Feather name="eye-off" color="gray" size={20} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              animation={"bounceIn"}
              onPress={this.handleSignUp}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                Signup
              </Text>
            </TouchableOpacity>
            <View style={styles.errorMessage}>
              {this.state.errorMessage && (
                <Text style={styles.error}>{this.state.errorMessage}</Text>
              )}
            </View>
          </Animatable.View>
        </View>
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    height: 250,
    justifyContent: "center",
  },

  text_header: {
    color: "white",
    fontWeight: "600",
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  text_footer: {
    color: "#05735a",
    fontSize: 18,
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05735a",
  },

  button: {
    width: "100%",
    backgroundColor: "#E9446A",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
