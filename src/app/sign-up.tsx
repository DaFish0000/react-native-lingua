import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VerificationModal } from "../components/VerificationModal";
import { images } from "../constants/images";
import { Pressable, ScrollView, Text, View } from "../tw";
import { Image } from "../tw/image";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

function SocialButton({
  iconName,
  iconColor,
  label,
  onPress,
}: {
  iconName: IoniconName;
  iconColor: string;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-4 px-5 rounded-2xl mb-3"
      style={styles.socialBtn}
    >
      <Ionicons name={iconName} size={22} color={iconColor} />
      <Text className="body-lg" style={{ fontFamily: "Poppins-Medium" }}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleSignUp() {
    if (!email.trim()) return;
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerClassName="px-6 pb-10"
        keyboardShouldPersistTaps="handled"
      >
        {/* Back button */}
        <Pressable onPress={() => router.back()} className="pt-4 pb-2 self-start">
          <Text className="text-2xl text-text-primary">‹</Text>
        </Pressable>

        {/* Headline */}
        <Text className="h2 mt-2">Create your account</Text>
        <Text className="body-md text-text-secondary mt-1">
          Start your language journey today ✨
        </Text>

        {/* Mascot */}
        <View className="items-center my-6">
          <Image
            source={images.mascotAuth}
            className="w-40 h-40"
            style={{ objectFit: "contain" } as any}
          />
        </View>

        {/* Email input */}
        <View className="mb-4">
          <Text className="body-sm text-text-secondary mb-1" style={{ fontFamily: "Poppins-Medium" }}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        {/* Sign Up button */}
        <Pressable
          onPress={handleSignUp}
          className="btn btn--primary rounded-2xl mt-2"
          style={styles.mainBtn}
        >
          <Text className="text-white text-base" style={{ fontFamily: "Poppins-SemiBold" }}>
            Sign Up
          </Text>
        </Pressable>

        {/* Divider */}
        <View className="flex-row items-center gap-3 my-6">
          <View className="flex-1 h-px bg-border" />
          <Text className="body-sm text-text-secondary">or continue with</Text>
          <View className="flex-1 h-px bg-border" />
        </View>

        {/* Social buttons */}
        <SocialButton
          iconName="logo-google"
          iconColor="#4285F4"
          label="Continue with Google"
          onPress={() => Alert.alert("Social sign-in", "Google sign-in is not implemented yet.")}
        />
        <SocialButton
          iconName="logo-facebook"
          iconColor="#1877F2"
          label="Continue with Facebook"
          onPress={() => Alert.alert("Social sign-in", "Facebook sign-in is not implemented yet.")}
        />
        <SocialButton
          iconName="logo-apple"
          iconColor="#000000"
          label="Continue with Apple"
          onPress={() => Alert.alert("Social sign-in", "Apple sign-in is not implemented yet.")}
        />

        {/* Sign In link */}
        <Pressable
          onPress={() => router.push("/sign-in" as any)}
          className="items-center mt-6"
        >
          <Text className="body-md text-text-secondary">
            Already have an account?{" "}
            <Text className="body-md text-primary" style={{ fontFamily: "Poppins-SemiBold" }}>
              Log in
            </Text>
          </Text>
        </Pressable>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F7FB",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#001328",
  },
  mainBtn: {
    paddingVertical: 20,
  },
  socialBtn: {
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
});
