import { ActivityIndicator, Pressable, PressableProps } from "react-native";

import { Colors } from "@/constants/theme";
import { AppText } from "./app-text";

type AppButtonProps = PressableProps & {
  title: string;
  loading?: boolean;
};

export function AppButton({
  title,
  loading = false,
  disabled = false,
  className,
  ...props
}: AppButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      className={`
        h-12 items-center justify-center rounded-3xl bg-primary
        ${isDisabled ? "opacity-50" : "active:opacity-80"}
        ${className ?? ""}
      `}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={Colors.light.primaryForeground} />
      ) : (
        <AppText variant="button">{title}</AppText>
      )}
    </Pressable>
  );
}
