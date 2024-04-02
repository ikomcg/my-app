import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { default as React, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import MainStack from "./Home";
import Login from "../screen/Login";

export default function RootNavigator() {
   const [isLogIn, setIsLogIn] = useState(false);
   const [appIsReady, setAppIsReady] = useState(false);

   useEffect(() => {
      async function prepare() {
         try {
            await new Promise((resolve) => setTimeout(resolve, 3000));
         } catch (e) {
            console.warn(e);
         } finally {
            setAppIsReady(true);
         }
      }

      prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return null;
   }

   return (
      <View style={{ flex: 1 }}>
         <StatusBar style="auto" />
         {isLogIn ? <MainStack /> : <Login />}
      </View>
   );
}
