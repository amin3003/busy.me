import type { Metadata } from 'next';
import './globals.css';
import { Navs } from '@/components';

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
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navs />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
