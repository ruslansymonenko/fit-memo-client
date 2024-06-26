import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.scss';
import { SITE_NAME } from '@/consts/app.consts';
import Navbar from '@/components/presentation/navbar/Navbar';

const font = Open_Sans({
  weight: ['300', '400', '500', '700'],
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
      <body className={`${font.className} text-fontDark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
