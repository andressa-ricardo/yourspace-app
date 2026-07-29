import { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

import { AppIcon } from "@/components/ui/app-icon";
import { AppText } from "@/components/ui/app-text";
import { Colors } from "@/constants/theme";

type AppInputProps = TextInputProps & {
  label: string;
  error?: string;
  isPassword?: boolean;
  leftIcon?: "mail";
};

export function AppInput({
  label,
  error,
  isPassword = false,
  leftIcon,
  className,
  ...inputProps
}: AppInputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const shouldHidePassword = isPassword && !passwordVisible;

  return (
    <View className="gap-2">
      <AppText variant="label">{label}</AppText>

      <View
        className={`
          h-14 flex-row items-center gap-3 rounded-3xl 
          bg-surface px-4
          ${error ? "border-destructive" : "border-border"}
        `}
      >
        {leftIcon ? (
          <AppIcon name={leftIcon} size={20} color={Colors.light.icon} />
        ) : null}

        <TextInput
          className={`
            flex-1 font-inter text-[16px] text-muted
            ${className ?? ""}
          `}
          placeholderTextColor={Colors.light.muted}
          secureTextEntry={shouldHidePassword}
          {...inputProps}
        />

        {isPassword ? (
          <Pressable
            hitSlop={10}
            onPress={() => setPasswordVisible((current) => !current)}
          >
            <AppIcon
              name={passwordVisible ? "eyeOff" : "eye"}
              size={20}
              color={Colors.light.icon}
            />
          </Pressable>
        ) : null}
      </View>

      {error ? <AppText variant="error">{error}</AppText> : null}
    </View>
  );
}
