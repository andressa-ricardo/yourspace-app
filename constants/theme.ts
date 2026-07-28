/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const primaryLight = '#2563EB';
const primaryDark = '#60A5FA';

export const Colors = {
  light: {
    text: '#0F172A',
    background: '#F8FAFC',
    surface: '#FFFFFF',
    tint: primaryLight,
    primary: primaryLight,
    primarySoft: '#DBEAFE',
    accent: '#F97316',
    muted: '#64748B',
    border: '#D7E2F0',
    icon: '#64748B',
    tabIconDefault: '#94A3B8',
    tabIconSelected: primaryLight,
  },
  dark: {
    text: '#E5EEF9',
    background: '#020817',
    surface: '#0F172A',
    tint: primaryDark,
    primary: primaryDark,
    primarySoft: '#172554',
    accent: '#FB923C',
    muted: '#94A3B8',
    border: '#1E293B',
    icon: '#94A3B8',
    tabIconDefault: '#64748B',
    tabIconSelected: primaryDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
