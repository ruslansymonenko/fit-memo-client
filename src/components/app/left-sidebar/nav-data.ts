interface INavData {
  pagePath: string;
  name: string;
}

export const appPages: INavData[] = [
  {
    pagePath: '/main/home',
    name: 'Home',
  },
  {
    pagePath: '/main/workouts',
    name: 'Workouts',
  },
  {
    pagePath: '/main/statistics',
    name: 'Statistics',
  },
  {
    pagePath: '/main/tags',
    name: 'Tags',
  },
];
