import { images, offers } from "@/constants";
import cn from "clsx";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardButton from "@/components/CardButton";

export default function Index() {
    return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View>
              <Pressable
                android_ripple={{ color: "#ffff22" }}
                className={cn(
                  "offer-card",
                  isEven ? "flex-row-reverse" : "flex-row"
                )}
                style={{ backgroundColor: item.color }}
              >
                {({ pressed }) => (
                  <>
                    <View className={"h-full w-1/2"}>
                      <Image
                        source={item.image}
                        className={"size-full"}
                      />
                    </View>

                    <View
                      className={cn(
                        "offer-card__info",
                        isEven ? "pl-10" : "pr-10"
                      )}
                    >
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor={"#ffffff"}
                      />
                    </View>
                  </>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5 "
        ListHeaderComponent={() => (
          <View className="flex-between flex-row  w-full my-5 px-5">
              <View className="flex-start">
                  <Text className="small-bold text-primary">DELIVER TO</Text>
                  <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                      <Text className="paragraph-bold text-dark-100">Nigeria</Text>
                      <Image
                          source={images.arrowDown}
                          className="size-3"
                          resizeMode="contain"
                      />
                  </TouchableOpacity>
              </View>
              <CardButton />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

