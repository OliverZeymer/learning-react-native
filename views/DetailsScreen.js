import { Pressable, Text, View } from "react-native"

export default function DetailsScreen({ route, navigation }) {
  const { name } = route.params
  return (
    <View>
      <Text>Details</Text>
      <Pressable onPress={() => navigation.push("Details")}>
        <Text>Go to Details</Text>
      </Pressable>
      <View>
        <Text>{name}</Text>
      </View>
    </View>
  )
}
