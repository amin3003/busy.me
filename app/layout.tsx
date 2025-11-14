import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navs } from '@/components';

export const metadata: Metadata = {
  title: 'Busy.me',
  description: 'Your simple productivity companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-gray-50 text-gray-900">
        <Navs />
        <main className="mx-auto w-full max-w-screen-2xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
