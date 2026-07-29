import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";

import { AppIcon, type AppIconName } from "@/components/ui/app-icon";
import { AppText } from "@/components/ui/app-text";

type NavigationItem = {
  id: string;
  labelKey: string;
  icon: AppIconName;
  route: string;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "home",
    labelKey: "home.sidebar.home",
    icon: "house",
    route: "/(home)",
  },
  {
    id: "tasks",
    labelKey: "home.sidebar.tasks",
    icon: "tasks",
    route: "/tasks",
  },
  {
    id: "calendar",
    labelKey: "home.sidebar.calendar",
    icon: "calendar",
    route: "/calendar",
  },
  {
    id: "notes",
    labelKey: "home.sidebar.notes",
    icon: "notes",
    route: "/notes",
  },
  {
    id: "profile",
    labelKey: "home.sidebar.profile",
    icon: "profile",
    route: "/profile",
  },
];

type BottomNavigationProps = {
  activeItem?: string;
};

export function BottomNavigation({
  activeItem = "home",
}: BottomNavigationProps) {
  const { t } = useTranslation();

  function handleNavigation(route: string) {
    router.push(route as never);
  }

  return (
    <View className="flex-row items-center justify-around border-t border-border bg-surface px-2 pb-3 pt-3">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.id === activeItem;

        return (
          <Pressable
            key={item.id}
            className="flex-1 items-center gap-1"
            onPress={() => handleNavigation(item.route)}
          >
            <AppIcon
              name={item.icon}
              size={20}
              color={isActive ? "#3F82F0" : "#5F6469"}
            />

            <AppText
              numberOfLines={1}
              className={`text-[9px] leading-[10px] ${
                isActive ? "text-primary" : "text-muted"
              }`}
            >
              {t(item.labelKey)}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}
