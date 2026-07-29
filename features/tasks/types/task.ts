export type TaskPriority = "low" | "medium" | "high" | "urgent";

export type Task = {
  id: string;
  title: string;
  time: string;
  priority: TaskPriority;
  completed: boolean;
};
