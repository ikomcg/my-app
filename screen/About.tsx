import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
   return (
      <View style={styles.container}>
         <Text>About</Text>
         <StatusBar style="auto" />
      </View>
   );
};

export default About;
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});
