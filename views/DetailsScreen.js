import { Image, Pressable, ScrollView, Text, View, Alert } from "react-native"
import useAxios from "../hooks/useAxios"

export default function DetailsScreen({ route }) {
  const { id } = route.params
  const { data, error, loading } = useAxios(`https://api.jikan.moe/v4/anime/${id}`)
  return (
    <View className="p-4 bg-black">
      <ScrollView className="gap-2 ">
        <View className="flex-1 items-center">
          {loading ? (
            <Text className="text-gray w-screen h-screen">Loading...</Text>
          ) : (
            <Text className="text-6xl tracking-tight font-bold text-[#f8f8f8] w-full">{data?.title_english ? data?.title_english : data?.title}</Text>
          )}
          <Image resizeMode="cover" resizeMethod="cover" className="w-[225px] h-[350px] my-8" source={{ uri: data?.images?.webp?.large_image_url }} />
        </View>
        <Text className="text-4xl font-bold text-[#f8f8f8]">Synopsis</Text>
        <Text className="text-lg text-[#f8f8f8]">{data?.synopsis}</Text>
        <Pressable
          className="self-start py-2.5 px-4 rounded-full bg-pink-600 shadow-xl"
          onPress={() => {
            Alert.alert("hva så")
          }}>
          <Text className="font-bold">hva så</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}
