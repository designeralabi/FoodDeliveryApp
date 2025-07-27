import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
// import React from 'react'
// import {SafeAreaView} from "react-native-safe-area-context";
import { images } from "@/constants";
import { Slot } from "expo-router";

export default function _Layout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className={"bg-white h-full"}
        keyboardShouldPersistTaps={"handled"}
      >
        <View
          className={"w-full relative"}
          style={{ height: Dimensions.get("screen").height / 2.25 }}
        >
          <ImageBackground
            source={images.loginGraphic}
            className={"size-full rounded-b-lg"}
            resizeMode={"stretch"}
          />

          <Image
            source={images.logo}
            className={"self-center size-48 absolute -bottom-16 z-10"}
            resizeMode={"stretch"}
          />
        </View>

        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
