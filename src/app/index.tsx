import { useRouter } from "expo-router";
import { View, Text, Pressable } from "../tw";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-6">
      <Text className="h1 text-primary-deep">Lingua</Text>
      <Pressable
        onPress={() => router.push("/onboarding" as any)}
        className="btn btn--primary rounded-2xl px-8 py-4"
      >
        <Text className="text-white" style={{ fontFamily: "Poppins-SemiBold" }}>
          View Onboarding
        </Text>
      </Pressable>
    </View>
  );
}
