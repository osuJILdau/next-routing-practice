'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О нас' },
  { href: '/blog', label: 'Блог' },
  { href: '/courses', label: 'Курсы' },
];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Главная страница">
          <span className="brand-icon">N</span>
          <span>next<span className="brand-light">.study</span></span>
        </Link>
        <nav className="nav-links" aria-label="Навигация">
          {links.map((link) => {
            const active = link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} className={active ? 'nav-link active' : 'nav-link'}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button type="button" className="header-button" onClick={() => router.push('/about')}>
          О проекте <span aria-hidden="true">↗</span>
        </button>
      </div>
    </header>
  );
}
