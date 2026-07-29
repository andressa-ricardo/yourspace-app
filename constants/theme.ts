/**
 * Cores e fontes usadas no aplicativo.
 * As cores são separadas entre tema claro e escuro.
 */

import { Platform } from "react-native";

const primaryLight = "#3F82F0";
const primaryDark = "#5C9CFF";

export const Colors = {
  light: {
    text: "#0E1216",
    background: "#F9FAFB",
    surface: "#FFFFFF",

    tint: primaryLight,
    primary: primaryLight,
    primaryForeground: "#FFFFFF",
    primarySoft: "#E3EFFF",

    muted: "#5F6469",
    border: "#E3E5E7",
    icon: "#5F6469",

    destructive: "#EE343B",
    success: "#20B46B",
    warning: "#EFA831",

    tabIconDefault: "#5F6469",
    tabIconSelected: primaryLight,
  },

  dark: {
    text: "#F4F5F7",
    background: "#060709",
    surface: "#101214",

    tint: primaryDark,
    primary: primaryDark,
    primaryForeground: "#FFFFFF",
    primarySoft: "#162B4D",

    muted: "#A2A7AD",
    border: "#212428",
    icon: "#A2A7AD",

    destructive: "#EE343B",
    success: "#20B46B",
    warning: "#EFA831",

    tabIconDefault: "#A2A7AD",
    tabIconSelected: primaryDark,
  },
};

export const CategoryColors = {
  blue: "#3F82F0",
  purple: "#9D57DE",
  pink: "#F3669A",
  orange: "#F3821D",
  green: "#20B46B",
  teal: "#00B4BC",
  red: "#EE343B",
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: "Inter_400Regular",
    medium: "Inter_500Medium",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",

    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },

  default: {
    sans: "Inter_400Regular",
    medium: "Inter_500Medium",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",

    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },

  web: {
    sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    medium:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    semibold:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    bold: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
});
