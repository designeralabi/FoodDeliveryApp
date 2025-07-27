import { Link, router } from "expo-router";
import { Alert, Text, View } from "react-native";
// import React from 'react'

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    if (!form.email || !form.password) {
      return Alert.alert("Please enter valid email and password");
    }
    setIsSubmitting(true);

    try {
      //  Appwrite sign in logic here

      Alert.alert("success", "User Sign in successfully");
      router.replace("/");
    } catch (error) {
      Alert.alert("error", "User Sign in failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your Email"
        keyboardType="email-address"
        label="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <CustomInput
        placeholder="Enter your Password"
        keyboardType="default"
        label="Password"
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
        secureTextEntry={true}
      />
      <CustomButton
        isLoading={isSubmitting}
        onPress={submit}
        title="Sign In"
      />

      <View className="flex flex-row justify-center items-center gap-2 mt-5">
        <Text className={"base-regular text-gray-100"}>
          Don't have an account?
        </Text>
        <Link href="/sign-up">Sign Up</Link>
      </View>
    </View>
  );
};
export default SignIn;
