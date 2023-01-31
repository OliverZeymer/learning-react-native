import { Text, View } from "react-native"
import useAxios from "../hooks/useAxios"

export default function SearchScreen({ route }) {
  const { search } = route.params
  const { data, error, loading } = useAxios(`https://api.jikan.moe/v4/anime?q=${search}&limit=10}`)
  return (
    <View className="p-4 bg-black">
      <Text className="text-7xl tracking-tight font-bold text-[#f8f8f8]">Search results:</Text>
    </View>
  )
}
