import { PUBLIC_URL } from '@/config/url.config';

export interface IMenuItem {
  link: string;
  name: string;
}

export const menu: IMenuItem[] = [
  {
    link: PUBLIC_URL.main(),
    name: 'Main',
  },
  {
    link: PUBLIC_URL.features(),
    name: 'Features',
  },
  {
    link: PUBLIC_URL.faq(),
    name: 'FAQ',
  },
  {
    link: PUBLIC_URL.pricing(),
    name: 'Pricing',
  },
];
