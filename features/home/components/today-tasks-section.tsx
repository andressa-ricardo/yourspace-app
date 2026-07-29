import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { AppText } from "@/components/ui/app-text";
import { TaskCard } from "@/features/tasks/components/task-card";
import { type Task } from "@/features/tasks/types/task";

const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Design review with Sofia",
    time: "10:30",
    priority: "high",
    completed: false,
  },
  {
    id: "2",
    title: "Morning run — 5km",
    time: "07:00",
    priority: "medium",
    completed: true,
  },
  {
    id: "3",
    title: "Read 'Atomic Habits' ch. 4",
    time: "21:00",
    priority: "low",
    completed: false,
  },
  {
    id: "4",
    title: "Plan Q3 roadmap",
    time: "14:00",
    priority: "urgent",
    completed: false,
  },
];

export function TodayTasksSection() {
  const { t } = useTranslation();

  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-end gap-2">
          <AppText className="text-[18px] font-bold">
            {t("home.sections.todaysTasks")}
          </AppText>

          <AppText variant="body" className="text-muted">
            {MOCK_TASKS.length}
          </AppText>
        </View>

        <AppText variant="link">{t("home.actions.seeAll")}</AppText>
      </View>

      <View className="gap-4">
        {MOCK_TASKS.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </View>
    </View>
  );
}
