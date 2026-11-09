import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import NavBar from './components/NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Study — Практическая работа',
  description: 'Маршрутизация, Layouts и Templates в Next.js',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <main>{children}</main>
        <footer className="footer">
          <div className="container footer-inner">
            <span>next.study</span>
            <span>Практическая работа • Next.js App Router</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
