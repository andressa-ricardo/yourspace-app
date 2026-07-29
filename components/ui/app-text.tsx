import { Text, TextProps } from "react-native";

type AppTextVariant =
  | "title"
  | "subtitle"
  | "body"
  | "label"
  | "caption"
  | "link"
  | "button"
  | "error";

type AppTextProps = TextProps & {
  variant?: AppTextVariant;
  className?: string;
};

const variants: Record<AppTextVariant, string> = {
  title:
    "font-bold text-[30px] leading-[38px] tracking-[-0.7px] text-foreground",

  subtitle:
    "font-inter text-[14px] leading-[24px] tracking-[-0.2px] text-muted",

  body: "font-inter text-[14px] leading-[24px] tracking-[-0.2px] text-foreground",

  label:
    "font-interMedium text-[12px] leading-[20px] tracking-[-0.15px] text-foreground",

  caption:
    "font-inter  text-[14px] leading-[20px] tracking-[-0.15px] text-muted",

  link: "font-interMedium text-[12px] leading-[20px] tracking-[-0.15px] text-primary",

  button:
    "font-bold text-[14px] leading-[20px] tracking-[-0.2px] text-primary-foreground",

  error: "font-inter text-[13px] leading-[18px] text-destructive",
};

export function AppText({
  variant = "body",
  className,
  ...props
}: AppTextProps) {
  return (
    <Text className={`${variants[variant]} ${className ?? ""}`} {...props} />
  );
}
