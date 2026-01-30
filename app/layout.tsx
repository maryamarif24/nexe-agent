import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';
import CursorMotion from '@/components/CursorMotion';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Nexe-Agent - Intelligent Digital Solutions',
  description: 'We build intelligent digital solutions that transform how businesses operate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen bg-[#020202] text-slate-300`}
      >
        <Providers>
          {/* Glowing Cursor Effect */}
          <CursorMotion />
          
          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}