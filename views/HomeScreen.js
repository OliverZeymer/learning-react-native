import { Text, View, Pressable } from "react-native"

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        onPress={() =>
          navigation.navigate("Details", {
            name: "din mor",
          })
        }>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  )
}
