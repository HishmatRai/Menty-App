import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SignUp = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [activeBtn, setActiveBtn] = useState(0);
  const [checked, setChecked] = React.useState("Individual");
  const [remember, setRemember] = useState(false);
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  let HeadingData = [{ heading: "Individual" }, { heading: "Business" }];
  const radioBtnCheckedValue = (value) => {
    setChecked(value);
    
};
const handler_signup =  (value) => {
//    alert(value)
  };
  return (
    <View style={styles.container}>
      {/* <<<<<<<< StatusBar >>>>>>>>> */}
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor="#013D6F"
        translucent={true}
      />

        <ScrollView>
          <View>
            <Text style={styles._heading}>Sign Up</Text>
            <View style={{ margin: 20 }}>
              {/* <Image
                source={require("./../../img/splashLogo.png")}
                style={styles._logo}
              /> */}

<Text style={styles._logo_text}>Menty</Text>
              {/* input */}
              <TextInput
                placeholder="Full Nam"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="gray"
              />
              <TextInput
                placeholder="User Name*"
                value={text}
                onChangeText={(text) => setText(text)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="gray"
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Email Address"
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="gray"
                secureTextEntry={true}
              />
 <TextInput
                placeholder="Password
                "
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="gray"
                secureTextEntry={true}
              />
               {/* <<<<<<<< Remember >>>>>>>>> */}
               <View style={styles._remember_main}>
                        {remember ? (
                          <MaterialCommunityIcons
                            name="checkbox-multiple-marked-outline"
                            size={14}
                            color="gray"
                            onPress={() => setRemember(!remember)}
                          />
                        ) : (
                          <MaterialCommunityIcons
                            name="checkbox-multiple-marked"
                            size={14}
                            color="gray"
                            onPress={() => setRemember(!remember)}
                          />
                        )}
                        <Text style={styles._remember_text}>I read and agree to the Terms Condition & Privacy Policy</Text>
                      </View>
              {/* Buttons Main */}
              <TouchableOpacity
                style={styles._login_btn}
                onPress={() => props.navigation.navigate("SignIn")}
                // onPress={() => handler_signup()}
              >
                <Text style={styles._login_btn_text}>Sign Up</Text>
              </TouchableOpacity>

              <View style={styles._dont_account_main}>
                <Text style={styles._dont_account_main_heading}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("SignIn")}
                >
                  <Text style={styles._singUp_btn}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
  },
  _logo: {
    width: 110,
    height: 118,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  _login_btn: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
    width: "90%",
    marginTop: 20,
    alignSelf:"center"
  },
  _login_btn_text: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 5,
    paddingTop: 5,
    color: "white",
    fontWeight: "bold",
  },
  _heading: {
    marginLeft: 20,
    marginTop: 20,
    color: "black",
    fontSize: 20,
    fontWeight:"bold"
  },
  _input: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "gray",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    borderColor:"gray",
    borderWidth:1,
    fontWeight:"bold"
  },
  _input2: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: "47%",
  },
  _dont_account_main: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  _dont_account_main_heading: {
    color: "gray",
    fontSize: 15,
  },
  _singUp_btn: {
    color: "gray",
    fontSize: 15,
    fontWeight: "bold",
  },
  _catagery_select_main: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _first_last_name: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _remember_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  _remember_text:{
      color:"gray",
      fontSize:12,
      marginLeft:5
  },
  _logo_text:{
    color:"black",
    textAlign:"center",
    fontSize:41,
    marginTop:40,
    marginBottom:20
}
});
export default SignUp;

