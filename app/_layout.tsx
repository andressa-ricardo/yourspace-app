import { Stack } from "expo-router";

import "@/app/i18n";
import "@/global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
