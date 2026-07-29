import {
  Bell,
  Calendar,
  ChartColumn,
  Circle,
  CircleCheck,
  Columns3,
  Eye,
  EyeOff,
  Flame,
  Globe,
  Goal,
  House,
  Info,
  List,
  Lock,
  Mail,
  MessageCircleHeart,
  Moon,
  NotepadText,
  Package2,
  ScrollText,
  Search,
  SquareCheckBig,
  Sun,
  TrendingUp,
  User,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react-native";

const APP_ICONS = {
  notifications: Bell,
  completed: CircleCheck,
  chart: ChartColumn,
  circle: Circle,
  streak: Flame,
  wishlist: Package2,
  notes: NotepadText,
  insights: TrendingUp,
  goals: Goal,
  tasks: SquareCheckBig,
  calendar: Calendar,
  journal: ScrollText,
  profile: User,
  language: Globe,
  house: House,
  lightMode: Sun,
  darkMode: Moon,
  security: Lock,
  info: Info,
  list: List,
  board: Columns3,
  search: Search,
  heart: MessageCircleHeart,
  mail: Mail,
  eye: Eye,
  eyeOff: EyeOff,
  focus: Zap,
} satisfies Record<string, LucideIcon>;

export type AppIconName = keyof typeof APP_ICONS;

type AppIconProps = LucideProps & {
  name: AppIconName;
};

export function AppIcon({ name, ...props }: AppIconProps) {
  const Icon = APP_ICONS[name];

  return <Icon {...props} />;
}

export { APP_ICONS };
