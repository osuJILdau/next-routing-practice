import type { ReactNode } from 'react';

interface CoursesLayoutProps {
  children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  return (
    <section className="container page-container">
      <div className="courses-banner"><span className="courses-banner-icon">✳</span><span>ОБРАЗОВАТЕЛЬНЫЙ РАЗДЕЛ</span><span className="courses-banner-right">Вложенный layout • /courses</span></div>
      {children}
    </section>
  );
}
