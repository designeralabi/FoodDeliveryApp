import {SplashScreen, Stack} from "expo-router";
import {useFonts} from "expo-font";
import './globals.css';
import {useEffect} from "react";

export default function RootLayout() {
  const [fontloaded, error] = useFonts(
      {
        "Quicksand-Bold" : require('../assets/fonts/Quicksand-Bold.ttf'),
        "Quicksand-light" : require('../assets/fonts/Quicksand-Light.ttf'),
        "Quicksand_medium" : require('../assets/fonts/Quicksand-Medium.ttf'),
        "Quicksand-regular" : require('../assets/fonts/Quicksand-Regular.ttf'),
        "Quicksand-semibold": require('../assets/fonts/Quicksand-SemiBold.ttf')
      }
  );

  useEffect(()=>{
    if (error) throw error;
    if(fontloaded) SplashScreen.hideAsync();
  }, [fontloaded, error]);
  return <Stack screenOptions={{ headerShown: false }} />;
}
