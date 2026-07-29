import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppButton } from "@/components/ui/app-button";
import { AppInput } from "@/components/ui/app-input";
import { AppText } from "@/components/ui/app-text";
import { useTranslation } from "react-i18next";

export function LoginScreen() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    setIsLoading(true);

    try {
      console.log({
        email,
        password,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleForgotPassword() {
    console.log("Recuperar senha");
  }

  function handleRegister() {
    console.log("Abrir cadastro");
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow justify-center px-6 py-10"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full gap-8">
            <View className="gap-2">
              <AppText variant="title">{t("auth.login.title")}</AppText>

              <AppText variant="label">{t("auth.login.subtitle")}</AppText>
            </View>

            <View className="gap-5">
              <AppInput
                label={t("auth.login.email.label")}
                placeholder={t("auth.login.email.placeholder")}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                textContentType="emailAddress"
              />

              <View className="gap-3">
                <AppInput
                  label={t("auth.login.password.label")}
                  placeholder={t("auth.login.password.placeholder")}
                  value={password}
                  onChangeText={setPassword}
                  isPassword
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="password"
                  textContentType="password"
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                />

                <Pressable className="self-end" onPress={handleForgotPassword}>
                  <AppText variant="link">
                    {t("auth.login.forgotPassword")}
                  </AppText>
                </Pressable>
              </View>
            </View>

            <AppButton
              title={t("auth.login.signInButton")}
              loading={isLoading}
              onPress={handleLogin}
            />

            <View className="gap-4">
              <View className="flex-row items-center">
                <View className="h-px flex-1 bg-border" />

                <AppText
                  variant="caption"
                  className="mx-4 uppercase text-[10px]"
                >
                  {t("auth.login.divider")}
                </AppText>

                <View className="h-px flex-1 bg-border" />
              </View>

              <Pressable className=" flex-row items-center justify-center rounded-full border h-12 border-border bg-surface">
                <Image
                  source={require("@/assets/images/google.png")}
                  className="mr-3 h-5 w-5"
                  resizeMode="contain"
                />

                <AppText
                  variant="button"
                  className="text-black font-interRegular text-[12px]"
                >
                  {t("auth.login.googleButton")}
                </AppText>
              </Pressable>

              <Pressable className="flex-row items-center justify-center h-12 rounded-full bg-foreground">
                <Image
                  source={require("@/assets/images/apple.png")}
                  className="mr-3 h-5 w-5"
                  resizeMode="contain"
                />

                <AppText
                  variant="button"
                  className="text-primary-foreground font-interSemiBold text-[12px]"
                >
                  {t("auth.login.appleButton")}
                </AppText>
              </Pressable>
            </View>
          </View>
        </ScrollView>

        <View className="flex-row items-center justify-center gap-1 pb-10 ">
          <AppText variant="caption" className="text-[10px]">
            {t("auth.login.dontHaveAccount")}
          </AppText>

          <Pressable onPress={handleRegister}>
            <AppText variant="link" className="text-[10px]">
              {t("auth.login.signUpLink")}
            </AppText>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
