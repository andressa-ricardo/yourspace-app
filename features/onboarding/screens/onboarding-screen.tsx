import { AppIcon } from "@/components/ui/app-icon";
import { AppText } from "@/components/ui/app-text";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Animated, Easing, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type OnboardingIcon = "calendar" | "heart" | "chart";

type OnboardingSlide = {
  id: string;
  icon: OnboardingIcon;
  iconColor: string;
  backgroundColor: string;
  titleKey: string;
  descriptionKey: string;
};

const onboardingSlides: OnboardingSlide[] = [
  {
    id: "capture",
    icon: "calendar",
    iconColor: "#3F82F0",
    backgroundColor: "#E3EFFF",
    titleKey: "onboarding.slides.capture.title",
    descriptionKey: "onboarding.slides.capture.description",
  },
  {
    id: "focus",
    icon: "heart",
    iconColor: "#9D57DE",
    backgroundColor: "#F1E7FA",
    titleKey: "onboarding.slides.focus.title",
    descriptionKey: "onboarding.slides.focus.description",
  },
  {
    id: "grow",
    icon: "chart",
    iconColor: "#F3821D",
    backgroundColor: "#FDEBD8",
    titleKey: "onboarding.slides.grow.title",
    descriptionKey: "onboarding.slides.grow.description",
  },
];
export default function OnboardingScreen() {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;
  const scale = useRef(new Animated.Value(0.95)).current;
  const currentSlide = onboardingSlides[currentIndex];

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(20);
    scale.setValue(0.95);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      Animated.timing(scale, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 400,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(translateY, {
          toValue: -20,
          duration: 400,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(scale, {
          toValue: 0.97,
          duration: 400,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (!finished) {
          return;
        }

        const isLastSlide = currentIndex === onboardingSlides.length - 1;
        if (isLastSlide) {
          router.replace("/(auth)/login");
          return;
        }

        setCurrentIndex((previousIndex) => previousIndex + 1);
      });
    }, 3600);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, opacity, scale, translateY]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center px-8">
        <Animated.View
          className="w-full items-center"

          style={{
            opacity,
            transform: [{ translateY }, { scale }],
          }}
        >
          <View
            className="mb-12 h-28 w-28 items-center justify-center rounded-[32px]"
            style={{
              backgroundColor: currentSlide.backgroundColor,
            }}
          >
            <AppIcon
              name={currentSlide.icon}
              size={46}
              color={currentSlide.iconColor}
            />
          </View>

          <AppText
            variant="title"
            className="text-center text-[30px] leading-[38px] text-[#0E1216]"
          >
            {t(currentSlide.titleKey)}
          </AppText>

          <AppText
            variant="body"
            className="mt-3 max-w-[300px] text-center text-[15px] leading-6 text-[#5F6469]"
          >
            {t(currentSlide.descriptionKey)}
          </AppText>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
