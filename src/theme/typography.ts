export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 13,
  caption: 11,
} as const;

export const lineHeight = {
  tight: 1.2,  // h1
  snug: 1.3,   // h2, h3
  normal: 1.4, // h4, caption
  relaxed: 1.6, // body
} as const;

export const typography = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h1,
    lineHeight: fontSize.h1 * lineHeight.tight,
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h2,
    lineHeight: fontSize.h2 * lineHeight.snug,
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h3,
    lineHeight: fontSize.h3 * lineHeight.snug,
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.h4,
    lineHeight: fontSize.h4 * lineHeight.normal,
  },
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyLarge,
    lineHeight: fontSize.bodyLarge * lineHeight.relaxed,
  },
  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyMedium,
    lineHeight: fontSize.bodyMedium * lineHeight.relaxed,
  },
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodySmall,
    lineHeight: fontSize.bodySmall * lineHeight.relaxed,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.caption,
    lineHeight: fontSize.caption * lineHeight.normal,
  },
} as const;
