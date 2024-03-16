import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PumpZone',
  icons: '/logo.svg'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-[#E2DDDB]', inter.className)}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
