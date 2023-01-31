import { Pressable, View, Text, Image } from "react-native"
import { Icon } from "react-native-vector-icons/Feather"

export default function Card({ index, anime, navigation }) {
  return (
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
  )
}
