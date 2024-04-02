import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import About from "../screen/About";

const Stack = createStackNavigator();

export default function MainStack() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
         />
         <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
   );
}
