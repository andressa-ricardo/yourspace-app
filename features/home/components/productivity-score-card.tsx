import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { AppText } from "@/components/ui/app-text";

const WEEK_DAY_KEYS = [
  "mondayShort",
  "tuesdayShort",
  "wednesdayShort",
  "thursdayShort",
  "fridayShort",
  "saturdayShort",
  "sundayShort",
] as const;

export function ProductivityScoreCard() {
  const { t } = useTranslation();

  // Dados mockados. Depois virão do backend.
  const productivityScore = 82;
  const weeklyChange = 12;

  const completedDays = [false, false, false, false, false, false, false];

  return (
    <LinearGradient
      colors={["#4F80F8", "#7B5CEB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ borderRadius: 24 }}
      className="p-6"
    >
      <AppText
        variant="caption"
        className="uppercase tracking-wide text-white/80"
      >
        {t("home.productivity.title")}
      </AppText>

      <View className="mt-4 flex-row items-end justify-between">
        <View className="flex-row items-end">
          <AppText
            variant="title"
            className="text-[56px] leading-[56px] text-white"
          >
            {productivityScore}
          </AppText>

          <AppText variant="body" className="mb-2 ml-2 text-white/80">
            {t("home.productivity.scoreSuffix")}
          </AppText>
        </View>

        <View className="rounded-full bg-white/20 px-3 py-2">
          <AppText variant="caption" className="text-white">
            {t("home.productivity.weeklyChange", {
              value: `+${weeklyChange}`,
            })}
          </AppText>
        </View>
      </View>

      <View className="mt-8 flex-row justify-between">
        {WEEK_DAY_KEYS.map((dayKey, index) => (
          <View key={dayKey} className="items-center gap-2">
            <View
              className={`h-10 w-10 rounded-full ${
                completedDays[index] ? "bg-white" : "bg-white/40"
              }`}
            />

            <AppText variant="caption" className="text-white/80">
              {t(`home.weekDays.${dayKey}`)}
            </AppText>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}
