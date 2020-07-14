import React, { useState } from "react";
import * as firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as senderActions from "../store/actions/sender";

const PackageInfoScreen = props => {
  const reqId = props.navigation.getParam("reqId");

  const selectedRequest = useSelector(state =>
    state.senders.currentSender.find(req => req.sndReq_id === reqId)
  );

  const [type, setType] = useState(
    selectedRequest ? selectedRequest.pack_type : ""
  );
  const [weight, setWeight] = useState(
    selectedRequest ? selectedRequest.pack_weight : ""
  );
  const [source, setSource] = useState(
    selectedRequest ? selectedRequest.snd_source : ""
  );
  const [destination, setDestination] = useState(
    selectedRequest ? selectedRequest.snd_dest : ""
  );
  const [arrDate, setArrDate] = useState(
    selectedRequest ? selectedRequest.snd_arr_date : ""
  );
  const [startRate, setStartRate] = useState(
    selectedRequest ? selectedRequest.snd_start_rate : ""
  );
  const [endRate, setEndRate] = useState(
    selectedRequest ? selectedRequest.snd_final_rate : ""
  );

  const dispatch = useDispatch();

  const CNIC = props.navigation.getParam("senderCNIC");
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
            Package Information
          </Text>
        </View>

        <View style={styles.name}>
          <TextInput
            style={styles.cnic}
            id="Type"
            label="Type"
            keyboardType="default"
            placeholder="Type"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={type}
            onChangeText={text => setType(text)}
          />

          <TextInput
            style={styles.location}
            id="weight"
            label="Weight"
            keyboardType="default"
            placeholder="Weight"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={weight}
            onChangeText={text => setWeight(text)}
          />
        </View>
        <View style={styles.name2}>
          <TextInput
            style={styles.source}
            id="source"
            label="Source"
            keyboardType="default"
            placeholder="Source City"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={source}
            onChangeText={text => setSource(text)}
          />

          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../assets/selectLocation.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.name2}>
          <TextInput
            style={styles.source}
            id="destination"
            label="Destination"
            keyboardType="default"
            placeholder="Destination City"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={destination}
            onChangeText={text => setDestination(text)}
          />

          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../assets/selectLocation.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.name2}>
          <TextInput
            style={styles.source}
            id="arr_date"
            label="Arrival Date"
            keyboardType="default"
            placeholder="Arrival Date"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={arrDate}
            onChangeText={text => setArrDate(text)}
          />

          <TouchableOpacity>
            <AntDesign name={"calendar"} size={29} color={"#07104C"} />
          </TouchableOpacity>
        </View>

        <View style={styles.range}>
          <Text style={{ textAlign: "center", color: "#6E6B6B" }}>
            (Please enter range of package delivery rate. Final rate will be
            decided after your negotiation with the Traveler){" "}
          </Text>
        </View>

        <View style={styles.name}>
          <TextInput
            style={styles.cnic}
            id="start_rate"
            label="start_rate"
            keyboardType="decimal-pad"
            placeholder="Starting from"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={startRate}
            onChangeText={text => setStartRate(text)}
          />

          <TextInput
            style={styles.location}
            id="end_rate"
            label="end_rate"
            keyboardType="decimal-pad"
            placeholder="Till"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={endRate}
            onChangeText={text => setEndRate(text)}
          />
        </View>

        <View style={styles.butonContainer}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Add Description</Text>
            <AntDesign name={"edit"} size={17} color={"#07104C"} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Add Photos</Text>
            <MaterialIcons name={"photo-camera"} size={17} color={"#07104C"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(token => {
                if (selectedRequest) {
                  dispatch(
                    senderActions.updateSender(
                      reqId,
                      token,
                      CNIC,
                      weight,
                      type,
                      source,
                      destination,
                      arrDate,
                      startRate,
                      endRate
                    )
                  );
                } else {
                  dispatch(
                    senderActions.postSender(
                      token,
                      CNIC,
                      weight,
                      type,
                      source,
                      destination,
                      arrDate,
                      startRate,
                      endRate
                    )
                  );
                }
              });

            setArrDate("");
            setDestination("");
            setEndRate("");
            setSource("");
            setStartRate("");
            setType("");
            setWeight("");

            props.navigation.pop(2);
          }}
        >
          <Text style={styles.buttonText}>
            {selectedRequest ? "Update Request" : "Post Request"}
          </Text>
          <Image style={styles.icon} source={require("../assets/check2.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white"
  },

  senderInfo: {
    alignItems: "center",
    marginTop: "1%"
  },

  icon: {
    width: 18,
    height: 18,
    //borderRadius: 30,
    resizeMode: "contain"
    // marginTop: "3%",
    // marginBottom: "3%"
  },

  header: {
    backgroundColor: "#f3a005",
    width: "60%",
    color: "#07104C",
    marginTop: "4%",
    marginBottom: "2%",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    borderRadius: 10,
    alignItems: "center"
  },

  range: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
    width: "85%"
  },

  buttonText: {
    fontSize: 13,
    color: "white",
    textTransform: "uppercase"
  },

  button: {
    marginTop: "1%",
    borderRadius: 20,
    backgroundColor: "#07104C",
    overflow: "hidden",
    padding: "3%",
    paddingHorizontal: "10%",
    alignItems: "center",
    elevation: 5
    //flexDirection: "row"
  },

  button2: {
    marginTop: "1%",
    borderRadius: 20,
    borderColor: "#07104C",
    borderWidth: 2,
    backgroundColor: "white",
    overflow: "hidden",
    padding: "2%",
    paddingHorizontal: "5%",
    //alignItems: "center",
    width: "45%",
    margin: "3%",
    height: "80%",
    //justifyContent: "center",
    alignItems: "center"

    //elevation: 5
  },

  buttonText2: {
    fontSize: 12,
    color: "#07104C",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold"
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

  butonContainer: {
    width: "90%",
    //height: "13%",
    flexDirection: "row",
    //margin: "4%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%"
  },

  desc: {
    width: "60%",
    height: "25%",
    //flexDirection: "row",
    //margin: "4%",
    //justifyContent: "center",
    //alignItems: "center",
    marginTop: "3%"
  },

  name2: {
    width: "70%",
    //height: "13%",
    flexDirection: "row",
    //margin: "4%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%"
  },

  cnic: {
    width: "50%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    padding: "2%"
  },

  pack_desc: {
    width: "80%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    padding: "2%",
    marginLeft: "8%"
  },

  source: {
    width: "70%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    padding: "3%",
    marginRight: "4%"
  },

  image: {
    width: 30,
    height: 30,
    //borderRadius: 30,
    resizeMode: "contain",
    marginTop: "3%",
    marginBottom: "3%"
  },

  location: {
    width: "49%",
    textAlign: "center",
    backgroundColor: "#F0F0F0",
    height: "100%",
    marginLeft: 4
  }
});

export default PackageInfoScreen;
