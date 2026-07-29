import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { AppIcon, type AppIconName } from "@/components/ui/app-icon";
import { AppText } from "@/components/ui/app-text";

type SummaryCard = {
  id: string;
  titleKey: string;
  value: string;
  icon: AppIconName;
  iconColor: string;
  iconBackgroundColor: string;
};

const SUMMARY_CARDS: SummaryCard[] = [
  {
    id: "tasks",
    titleKey: "home.summary.tasks",
    value: "3/10",
    icon: "completed",
    iconColor: "#3F82F0",
    iconBackgroundColor: "#E3EFFF",
  },
  {
    id: "streak",
    titleKey: "home.summary.streak",
    value: "24d",
    icon: "streak",
    iconColor: "#F3821D",
    iconBackgroundColor: "#FDE8D5",
  },
  {
    id: "focus",
    titleKey: "home.summary.focus",
    value: "2h 45m",
    icon: "focus",
    iconColor: "#9D57DE",
    iconBackgroundColor: "#EFE2FC",
  },
];

export function SummaryCards() {
  const { t } = useTranslation();

  return (
    <View className="flex-row gap-3">
      {SUMMARY_CARDS.map((card) => (
        <View
          key={card.id}
          className="flex-1 rounded-2xl border border-border bg-surface p-3"
        >
          <View
            className="mb-3 h-8 w-8 items-center justify-center rounded-full"
            style={{ backgroundColor: card.iconBackgroundColor }}
          >
            <AppIcon name={card.icon} size={17} color={card.iconColor} />
          </View>

          <AppText variant="caption" className=" font-bold text-[#363839] ">
            {t(card.titleKey)}
          </AppText>

          <AppText className="mt-1 font-bold text-black-500">
            {card.value}
          </AppText>
        </View>
      ))}
    </View>
  );
}
