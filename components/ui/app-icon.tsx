import {
  Bell,
  Calendar,
  CircleCheck,
  Columns3,
  Flame,
  Globe,
  Goal,
  Info,
  List,
  Lock,
  Moon,
  NotepadText,
  Package2,
  type LucideIcon,
  type LucideProps,
  ScrollText,
  Search,
  SquareCheckBig,
  Sun,
  TrendingUp,
  User,
} from 'lucide-react-native';

const APP_ICONS = {
  notifications: Bell,
  completed: CircleCheck,
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
  lightMode: Sun,
  darkMode: Moon,
  security: Lock,
  info: Info,
  list: List,
  board: Columns3,
  search: Search,
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
