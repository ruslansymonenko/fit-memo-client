import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import { SITE_NAME } from '@/consts/app.consts';

const font = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
