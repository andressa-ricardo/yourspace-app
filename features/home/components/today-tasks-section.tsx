import { AppText } from "@/components/ui/app-text";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

export function TodayTasksSection() {
  const { t } = useTranslation();

  // Mockado. Depois trago do backend.
  const totalTasks = 4;

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-end gap-2">
        <AppText className="font-bold text-[18px]">
          {t("home.sections.todaysTasks")}
        </AppText>

        <AppText variant="body" className="text-muted">
          {totalTasks}
        </AppText>
      </View>

      <AppText variant="link">{t("home.actions.seeAll")}</AppText>
    </View>
  );
}
