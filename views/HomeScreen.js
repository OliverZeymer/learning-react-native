import { Text, View, Pressable } from "react-native"

export default function HomeScreen({ navigation }) {
  return (
    <View className="p-4">
      <Text className="text-7xl tracking-tight font-bold text-pink-600">Home</Text>
      <Pressable className="self-start py-2.5 px-4 rounded-full bg-pink-600 shadow-xl" onPress={() => navigation.navigate("Details")}>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  )
}
