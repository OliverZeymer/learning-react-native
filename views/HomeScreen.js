import { Text, View, Pressable, Image, ScrollView } from "react-native"
import useAxios from "../hooks/useAxios"
import Icon from "react-native-vector-icons/Feather"
export default function HomeScreen({ navigation }) {
  const API_URL = "https://api.jikan.moe/v4/anime?order_by=members&sort=desc&limit=10&sfw"
  const { data, error, loading } = useAxios(API_URL)

  return (
    <ScrollView className="p-4 bg-black">
      <Text className="text-7xl tracking-tight font-bold text-[#f8f8f8]">Home</Text>
      <Text className="text-4xl font-bold text-[#f8f8f8] mb-8">Search</Text>
      <View className="flex-row gap-4">
        <Pressable
          className="flex-1 py-2.5 px-4 rounded-full bg-[#111111] shadow-xl"
          onPress={() => {
            navigation.navigate("Search", { type: "anime" })
          }}>
          <View className="flex-row items-center justify-center">
            <Icon name="search" size={24} color="#f8f8f8" />
            <Text className="font-bold text-[#f8f8f8]">Anime</Text>
          </View>
        </Pressable>
      </View>
      <Text className="text-4xl font-bold text-[#f8f8f8] mb-8">Top 10 Anime</Text>
      <View className="gap-12">
        {loading ? (
          <Text className="text-gray">Loading...</Text>
        ) : (
          data?.map((anime, index) => (
            <Pressable key={index} onPress={() => navigation.navigate("Details", { id: anime?.mal_id, name: anime?.title_english ? anime?.title_english : anime?.title })}>
              <View className="rounded-xl bg-[#111111] gap-4 w-4/5 mx-auto items-center justify-center pb-4">
                <Text numberOfLines={1} className="text-2xl font-bold text-[#f8f8f8] text-center">
                  {index + 1}. {anime?.title_english ? anime?.title_english : anime?.title}
                </Text>
                <Image resizeMode="cover" resizeMethod="cover" className="w-[225px] h-[350px] rounded" source={{ uri: anime?.images?.webp?.large_image_url }} />
                <Text className="text-lg text-[#f8f8f8]">
                  <Icon name="users" size={18} /> {anime?.members.toLocaleString()}
                </Text>
              </View>
            </Pressable>
          ))
        )}
      </View>

      <Pressable className="self-start py-2.5 px-4 rounded-full bg-pink-600 shadow-xl" onPress={() => navigation.navigate("Details")}>
        <Text>Go to Details</Text>
      </Pressable>
    </ScrollView>
  )
}
