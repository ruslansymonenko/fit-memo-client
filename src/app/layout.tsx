import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.scss';
import { SITE_NAME, SITE_DESCRIPTION } from '@/consts/seo.consts';
import { Providers } from '@/providers/providers';

const font = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} text-fontDark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
