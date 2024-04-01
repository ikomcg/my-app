import { Feather, AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
   Image,
   ImageBackground,
   KeyboardAvoidingView,
   Platform,
   Pressable,
   StyleSheet,
   Text,
   TextInput,
   TouchableHighlight,
   View,
} from "react-native";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <KeyboardAvoidingView
         style={styles.container}
         behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
         <ImageBackground
            source={require("../assets/background.png")}
            resizeMode="cover"
            style={{
               flex: 1,
               justifyContent: "center",
            }}
         >
            <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
               <View
                  style={{
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     marginTop: "auto",
                     marginBottom: "auto",
                  }}
               >
                  <Image style={{}} source={require("../assets/logo.png")} />
                  <Text style={styles.schoolName}>Bright School</Text>
               </View>

               <View style={styles.loginView}>
                  <View>
                     <Text
                        style={{
                           fontSize: 24,
                           fontWeight: "700",
                           color: "#1E293B",
                           marginBottom: 8,
                        }}
                     >
                        Login
                     </Text>
                     <Text
                        style={{
                           fontSize: 16,
                           fontWeight: "400",
                           color: "#8A8A8A",
                        }}
                     >
                        Please enter your credentials to proceed
                     </Text>
                  </View>

                  <View style={{ gap: 24 }}>
                     <View>
                        <Text
                           style={{
                              fontSize: 16,
                              fontWeight: "400",
                              marginBottom: 8,
                           }}
                        >
                           Username
                        </Text>
                        <TextInput
                           style={styles.input}
                           placeholder="Enter username"
                        />
                     </View>
                     <View>
                        <Text
                           style={{
                              fontSize: 16,
                              fontWeight: "400",
                              marginBottom: 8,
                           }}
                        >
                           Password
                        </Text>
                        <View style={[styles.input, { flexDirection: "row" }]}>
                           <TextInput
                              placeholder="Enter password"
                              secureTextEntry={!showPassword}
                              style={{
                                 flex: 1,
                              }}
                           />
                           <Pressable
                              onPress={() => setShowPassword((val) => !val)}
                              style={{
                                 marginLeft: "auto",
                              }}
                           >
                              <View>
                                 {showPassword ? (
                                    <Feather
                                       name="eye-off"
                                       size={20}
                                       color="black"
                                    />
                                 ) : (
                                    <Feather
                                       name="eye"
                                       size={20}
                                       color="black"
                                    />
                                 )}
                              </View>
                           </Pressable>
                        </View>
                     </View>
                  </View>
                  <TouchableHighlight
                     style={[styles.button, { backgroundColor: "#004AAD" }]}
                  >
                     <View
                        style={{
                           flexDirection: "row",
                           justifyContent: "center",
                           alignItems: "center",
                           gap: 5,
                        }}
                     >
                        <Text style={{ color: "#fff", textAlign: "center" }}>
                           Log in
                        </Text>
                        <AntDesign name="arrowright" size={20} color="white" />
                     </View>
                  </TouchableHighlight>
               </View>
            </View>
         </ImageBackground>
      </KeyboardAvoidingView>
   );
};

export default Login;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   schoolName: {
      fontSize: 29,
      fontStyle: "normal",
      fontWeight: "700",
      color: "#004AAD",
   },
   loginView: {
      paddingTop: 54,
      paddingBottom: 32,
      paddingHorizontal: 30,
      backgroundColor: "#fff",
      width: "100%",
      borderTopEndRadius: 32,
      borderTopStartRadius: 32,
      gap: 32,
      borderWidth: 2,
      borderColor: "#E1E7EF",
   },
   button: {
      fontSize: 18,
      fontWeight: "500",
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 20,
   },
   input: {
      borderWidth: 1,
      padding: 12,
      borderColor: "#E1E7EF",
      borderRadius: 8,
   },
});
