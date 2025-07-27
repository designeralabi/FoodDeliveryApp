import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
// import React from 'react'

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submit = async () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return Alert.alert("Please enter valid name, email and password");
    }
    if (form.password !== form.confirmPassword) {
      return Alert.alert("Passwords do not match");
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
        label="Name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />

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

      <CustomInput
        placeholder="Confirm your Password"
        keyboardType="default"
        label="Confirm Password"
        value={form.confirmPassword}
        onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
        secureTextEntry={true}
      />
      <CustomButton
        isLoading={isSubmitting}
        onPress={submit}
        title="Sign Up"
      />

      <View className="flex flex-row justify-center items-center gap-2 mt-5">
        <Text className={"base-regular text-gray-100"}>
          Already have an account?{" "}
        </Text>
        <Link href="/sign-in">Sign In</Link>
      </View>
    </View>
  );
};
export default SignUp;
