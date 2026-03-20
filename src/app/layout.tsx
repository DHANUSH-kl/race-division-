import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import ScrollReveal from '@/components/ScrollReveal';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Race Devision | Precision Bike Tuning Mumbai',
  description: 'Precision ECU tuning, performance upgrades, and state-of-the-art dyno diagnostics for superbikes. Engineered for the elite riders of Mumbai.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-neutral-400 antialiased selection:bg-neutral-800 selection:text-neutral-100 overflow-x-hidden`}>
        {children}
        <ScrollReveal />
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
