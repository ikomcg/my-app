import { createStaticNavigation } from "@react-navigation/native";
import Navigator from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
   return (
      <NavigationContainer>
         {/* <SafeAreaProvider> */}
            <Navigator />
         {/* </SafeAreaProvider> */}
      </NavigationContainer>
   );
}
