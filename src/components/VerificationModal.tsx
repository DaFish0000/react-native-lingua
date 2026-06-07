import { colors, fontFamily } from "@/theme";
import { Pressable, Text, View } from "@/tw";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
}

export function VerificationModal({ visible, email, onClose }: Props) {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);

  function handleChange(text: string, index: number) {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);

    if (digit && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (digit && index === 5) {
      const full = next.join("");
      if (full.length === 6) {
        setTimeout(() => {
          onClose();
          router.replace("/");
        }, 150);
      }
    }
  }

  function handleKeyPress(key: string, index: number) {
    if (key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="w-full bg-background rounded-t-3xl px-6 pt-8 pb-10">
          {/* Handle bar */}
          <View className="w-12 h-1 bg-border rounded-full self-center mb-6" />

          <Text className="h3 text-center mb-2">Check your email</Text>
          <Text className="body-md text-text-secondary text-center mb-8">
            We sent a 6-digit code to{"\n"}
            <Text className="body-md text-text-primary">{email}</Text>
          </Text>

          {/* Code inputs */}
          <View className="flex-row justify-center gap-3 mb-8">
            {code.map((digit, i) => (
              <TextInput
                key={i}
                ref={(el) => { inputs.current[i] = el; }}
                value={digit}
                onChangeText={(text) => handleChange(text, i)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, i)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
                className="text-center font-semibold"
                style={[
                  styles.codeInput,
                  digit ? styles.codeInputFilled : null,
                ]}
              />
            ))}
          </View>

          <Pressable onPress={onClose} className="items-center py-3">
            <Text className="body-md text-text-secondary">
              Didn't receive it?{" "}
              <Text className="body-md text-primary">Resend</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  codeInput: {
    width: 48,
    height: 56,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    textAlign: "center",
    fontSize: 22,
    fontFamily: fontFamily.semiBold,
    color: colors.textPrimary,
  },
  codeInputFilled: {
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
});
