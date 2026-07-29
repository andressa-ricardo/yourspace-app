import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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

export function RegisterScreen() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister() {
    setIsLoading(true);

    try {
      console.log({
        name,
        email,
        password,
        confirmPassword,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Depois do cadastro, você pode:
      // 1. voltar para o login:
      router.replace("/(auth)/login");

      // ou 2. fazer login automático e ir para a home:
      // router.replace("/(app)/home");
    } catch (error) {
      console.error("Erro ao realizar cadastro:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleBackToLogin() {
    router.back();
  }

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow px-6 py-10"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-center gap-8">
            <View className="gap-2">
              <AppText variant="title">{t("auth.register.title")}</AppText>

              <AppText variant="label">{t("auth.register.subtitle")}</AppText>
            </View>

            <View className="gap-5">
              <AppInput
                label={t("auth.register.fullName.label")}
                placeholder={t("auth.register.fullName.placeholder")}
                value={name}
                onChangeText={setName}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="name"
                textContentType="name"
              />

              <AppInput
                label={t("auth.register.email.label")}
                placeholder={t("auth.register.email.placeholder")}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                textContentType="emailAddress"
              />

              <AppInput
                label={t("auth.register.password.label")}
                placeholder={t("auth.register.password.placeholder")}
                value={password}
                onChangeText={setPassword}
                isPassword
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="new-password"
                textContentType="newPassword"
              />
            </View>
            <AppText className="text-black text-[9px]">
              {t("auth.register.terms.prefix")}{" "}
              <AppText className="text-black text-[9px] underline">
                {t("auth.register.terms.termsOfUse")}
              </AppText>{" "}
              {t("auth.register.terms.and")}{" "}
              <AppText className="text-black text-[9px] underline">
                {t("auth.register.terms.privacyPolicy")}
              </AppText>
            </AppText>

            <AppButton
              title={t("auth.register.createAccountButton")}
              loading={isLoading}
              onPress={handleRegister}
            />

            <View className="gap-4">
              <View className="flex-row items-center">
                <View className="h-px flex-1 bg-border" />

                <AppText
                  variant="caption"
                  className="mx-4 uppercase text-[10px]"
                >
                  {t("auth.register.divider")}
                </AppText>

                <View className="h-px flex-1 bg-border" />
              </View>

              <Pressable className=" flex-row items-center justify-center rounded-full border h-12 border-border bg-surface text-foreground">
                <Image
                  source={require("@/assets/images/google.png")}
                  className="mr-3 h-5 w-5"
                  resizeMode="contain"
                />

                <AppText variant="button" style={{ color: "#000" }}>
                  {t("auth.register.googleButton")}
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
                  {t("auth.register.appleButton")}
                </AppText>
              </Pressable>
            </View>
          </View>
        </ScrollView>

        <View className="flex-row items-center justify-center gap-1 px-6 pb-6">
          <AppText variant="link" className="text-[10px] text-[#000000]">
            {t("auth.register.alreadyHaveAccount")}
          </AppText>

          <Pressable onPress={handleBackToLogin}>
            <AppText variant="link" className="text-[10px]">
              {t("auth.register.signInLink")}
            </AppText>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
