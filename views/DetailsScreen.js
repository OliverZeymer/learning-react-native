import { Image, Pressable, ScrollView, Text, View } from "react-native"
import axios from "axios"
import { useEffect, useState } from "react"
import useAxios from "../hooks/useAxios"

export default function DetailsScreen() {
  const { data, error, loading } = useAxios("https://api.jikan.moe/v4/anime/16498")
  return (
    <View className="p-4">
      <ScrollView className="gap-2">
        <Text className="text-7xl tracking-tight font-bold text-pink-600">Details</Text>
        <View className="flex-1">
          {loading ? <Text className="text-gray ">Loading...</Text> : <Text className="text-3xl font-bold">{data?.title_english ? data?.title_english : data?.title}</Text>}
          <Image resizeMode="cover" resizeMethod="cover" className="w-[225px] h-[350px]" source={{ uri: data?.images?.webp?.large_image_url }} />
        </View>
        <Text className="text-2xl font-bold">Synopsis</Text>
        <Text className="text-lg">{data?.synopsis}</Text>
      </ScrollView>
    </View>
  )
}
