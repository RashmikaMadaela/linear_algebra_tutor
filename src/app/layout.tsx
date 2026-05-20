import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Linear Algebra',
    default: 'Linear Algebra — Interactive Course',
  },
  description:
    'An interactive, proof-based linear algebra course covering algebraic structures, vector spaces, inner products, linear transformations, spectral theory, and decompositions.',
  keywords: ['linear algebra', 'mathematics', 'vector spaces', 'eigenvectors', 'MA2034'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
