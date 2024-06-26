export interface IMenuItem {
  link: string;
  name: string;
}

export const menu: IMenuItem[] = [
  {
    link: '/',
    name: 'Main',
  },
  {
    link: '/features',
    name: 'Features',
  },
  {
    link: '/faq',
    name: 'FAQ',
  },
  {
    link: '/pricing',
    name: 'Pricing',
  },
];
