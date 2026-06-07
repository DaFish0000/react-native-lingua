export const colors = {
  // Primary palette
  primary: "#6C4EF5",
  primaryDeep: "#5B3BF6",
  blue: "#4D88FF",
  green: "#21C16B",

  // Semantic
  success: "#21C16B",
  warning: "#FFCB00",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D88FF",

  // Neutrals
  textPrimary: "#001328",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export type ColorKey = keyof typeof colors;
