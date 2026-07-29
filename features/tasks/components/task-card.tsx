import { useState } from "react";
import { Pressable, View } from "react-native";

import { AppIcon } from "@/components/ui/app-icon";
import { AppText } from "@/components/ui/app-text";

import { Task } from "../types/task";

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  const [completed, setCompleted] = useState(task.completed);

  function handleToggleCompleted() {
    setCompleted((previous) => !previous);
  }

  return (
    <Pressable
      onPress={handleToggleCompleted}
      className="flex-row items-center rounded-[20px] border border-[#E7E7E7] bg-white px-6 py-2"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      }}
    >
      <View className="mr-5">
        <AppIcon
          name={completed ? "completed" : "circle"}
          size={25}
          color={completed ? "#3F82F0" : "#6B7280"}
        />
      </View>

      <View className="flex-1 gap-2">
        <AppText className={` ${completed ? "text-muted line-through" : ""}`}>
          {task.title}
        </AppText>

        <View className="flex-row items-center gap-3">
          <AppText variant="caption" className="text-muted">
            {task.time}
          </AppText>

          <View className="h-2 w-2 rounded-full bg-orange-500" />

          <AppText variant="caption" className="text-muted">
            High
          </AppText>
        </View>
      </View>
    </Pressable>
  );
}
