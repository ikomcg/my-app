import { createStaticNavigation } from "@react-navigation/native";
import RootStack from "./routes/Home";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
   return (
      <NavigationContainer>
         <RootStack />
      </NavigationContainer>

   );
}
