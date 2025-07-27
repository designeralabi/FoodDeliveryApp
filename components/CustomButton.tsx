import cn from "clsx";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps {
  style?: string;
  onPress?: () => void;
  title?: string;
  isLoading?: boolean;
  textStyle?: string;
  leftIcon?: string;
}

const CustomButton = ({
  style,
  onPress,
  title = "Click Me",
  isLoading = false,
  textStyle = "text-white",
  leftIcon = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={cn("custom-btn", style)}
      onPress={onPress}
    >
      {leftIcon}
      <View className="flex-row flex-center">
        {isLoading ? (
          <ActivityIndicator
            className="mr-2"
            size="small"
            color="#fff"
          />
        ) : (
          <Text className={cn("text-white", textStyle)}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default CustomButton;
