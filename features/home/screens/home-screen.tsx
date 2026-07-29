import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppIcon } from "@/components/ui/app-icon";
import { AppText } from "@/components/ui/app-text";
import { BottomNavigation } from "../components/navigation/bottom-navigation";
import { ProductivityScoreCard } from "../components/productivity-score-card";
import { SummaryCards } from "../components/summary-cards";
import { TodayTasksSection } from "../components/today-tasks-section";

export function HomeScreen() {
  const { t, i18n } = useTranslation();

  function getCurrentDate() {
    const locale = i18n.language === "pt-BR" ? "pt-BR" : "en-US";

    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(new Date());
  }

  function getGreetingKey() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return "home.greeting.morning";
    }

    if (hour >= 12 && hour < 18) {
      return "home.greeting.afternoon";
    }

    return "home.greeting.evening";
  }

  const userName = "Andressa";

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 py-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full gap-8">
          <View className="w-full gap-1">
            <View className="flex-row items-center justify-between">
              <AppText variant="caption" className="text-muted">
                {getCurrentDate()}
              </AppText>

              <View className="rounded-full bg-primary/10 p-2">
                <AppIcon name="notifications" size={18} />
              </View>
            </View>

            <AppText variant="title">{t(getGreetingKey())}</AppText>

            <AppText variant="title">{userName} ✨</AppText>
          </View>

          <ProductivityScoreCard />

          <SummaryCards />

          <TodayTasksSection />
        </View>
      </ScrollView>

      <BottomNavigation activeItem="home" />
    </SafeAreaView>
  );
}
