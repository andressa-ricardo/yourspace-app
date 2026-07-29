import { SafeAreaView } from "react-native-safe-area-context";

import { AppText } from "@/components/ui/app-text";

export function RegisterScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <AppText variant="title">Register</AppText>
    </SafeAreaView>
  );
}
