import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import Hr from "react-native-hr-component";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
// import console = require("console");

const SenderInfoScreen = props => {
  const reqId = props.navigation.getParam("reqId");
  //console.log(reqId);
  const selectedRequest = useSelector(state =>
    state.senders.currentSender.find(req => req.sndReq_id === reqId)
  );

  // console.log(selectedRequest);

  const [CNIC, setCNIC] = useState(
    selectedRequest ? selectedRequest.snd_cnic : ""
  );

  const PackageInfo = () => {
    if (selectedRequest) {
      props.navigation.navigate("PackageInfo", {
        senderCNIC: CNIC,
        reqId: reqId
      });
    } else {
      props.navigation.navigate("PackageInfo", {
        senderCNIC: CNIC
      });
    }

    setCNIC("");
  };
  return (
    <View style={styles.screen}>
      <View style={styles.senderInfo}>
        <View style={styles.header}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: 16
            }}
          >
            Sender Information
          </Text>
        </View>
        <View style={{ alignItems: "center", padding: "2%" }}>
          <Text style={{ fontWeight: "bold", color: "#07104C", fontSize: 15 }}>
            {firebase.auth().currentUser.displayName}
          </Text>
          <Text style={{ fontWeight: "bold", color: "#07104C", fontSize: 15 }}>
            {firebase.auth().currentUser.email}
          </Text>
          {/* <Text style={{ fontWeight: "bold", color: "#07104C", fontSize: 15 }}>
            0307-2879962
          </Text> */}
        </View>

        <View style={styles.name}>
          <TextInput
            // ref={component => (cnic = component)}
            style={styles.cnic}
            id="cnic"
            label="CNIC"
            keyboardType="decimal-pad"
            placeholder="CNIC"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={CNIC}
            onChangeText={text => setCNIC(text)}
          />
        </View>
        {/* <View style={styles.name2}>
          <TextInput
            style={styles.location}
            id="location"
            label="location"
            keyboardType="decimal-pad"
            placeholder="Home Location"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
          />

          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../assets/selectLocation.png")}
            />
          </TouchableOpacity>
        </View> */}

        <View style={styles.notes}>
          <Text style={{ fontWeight: "bold", color: "#575656" }}>Notes:</Text>
          <Text style={{ color: "#6E6B6B", fontSize: 13 }}>
            CNIC & location will not be shared with other users. This is for
            security purposes.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.next} onPress={PackageInfo}>
        <Text style={styles.buttonText}>Proceed to Package information</Text>
        <Ionicons name={"md-arrow-round-forward"} size={20} color={"#07104C"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },

  senderInfo: {
    alignItems: "center",
    marginTop: "5%"
  },

  packageInfo: {
    alignItems: "center"
  },

  header: {
    backgroundColor: "#f3a005",
    width: "100%",
    color: "#07104C",
    marginTop: "4%",
    marginBottom: "2%",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    borderRadius: 10
  },

  name: {
    width: "90%",
    //height: "13%",
    flexDirection: "row",
    //margin: "4%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%"
  },

  name2: {
    width: "72%",
    //height: "13%",
    flexDirection: "row",
    //margin: "4%",
    //justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%",
    marginLeft: "10%"
  },

  image: {
    width: 30,
    height: 30,
    //borderRadius: 30,
    resizeMode: "contain",
    marginTop: "3%",
    marginBottom: "3%"
  },

  cnic: {
    width: "50%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    padding: "2%"
  },

  cnic2: {
    width: "50%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    padding: "2%"
  },

  location: {
    width: "60%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    height: "80%",
    padding: "3%",
    marginRight: "4%",
    paddingTop: "10%"
    // marginLeft: 4,
    // padding: "7%"
  },

  next: {
    alignItems: "center",
    justifyContent: "space-between",
    top: 100,
    //flexDirection: "row",
    width: "60%"
  },

  buttonText: {
    marginBottom: "3%",
    fontSize: 14,
    color: "#07104C"
  },

  location2: {
    width: "49%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    height: "100%"
    // marginLeft: 4,
    // padding: "7%"
  },

  notes: {
    marginTop: "5%",
    width: "80%"
  }
});

export default SenderInfoScreen;
