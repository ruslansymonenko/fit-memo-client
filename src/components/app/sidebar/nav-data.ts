import { PRIVATE_URL } from '@/config/url.config';
import {
  LucideIcon,
  Home,
  Dumbbell,
  BarChartBigIcon,
  Tag,
  ClipboardList,
  Trophy,
} from 'lucide-react';

interface INavData {
  pagePath: string;
  name: string;
  icon: LucideIcon;
}

export const appPages: INavData[] = [
  {
    pagePath: `${PRIVATE_URL.home()}`,
    name: 'Home',
    icon: Home,
  },
  {
    pagePath: `${PRIVATE_URL.workouts()}`,
    name: 'Workouts',
    icon: Dumbbell,
  },
  {
    pagePath: `${PRIVATE_URL.workoutTypes()}`,
    name: 'Workout Types',
    icon: Trophy,
  },
  {
    pagePath: `${PRIVATE_URL.exercises()}`,
    name: 'Exercises',
    icon: ClipboardList,
  },
  {
    pagePath: `${PRIVATE_URL.statistics()}`,
    name: 'Statistics',
    icon: BarChartBigIcon,
  },
  {
    pagePath: `${PRIVATE_URL.tags()}`,
    name: 'Tags',
    icon: Tag,
  },
];
