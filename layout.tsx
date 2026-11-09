import type { ReactNode } from 'react';
import StateCounter from '../components/StateCounter';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <section className="blog-layout container page-container">
      <div className="demo-panel">
        <div className="demo-panel-head"><span className="small-dot" /> ОБЩИЙ BLOG LAYOUT <span className="demo-tag">layout.tsx</span></div>
        <StateCounter name="Счётчик общего Layout" description="Нажми + и переходи по статьям. Этот блок сохраняется." />
      </div>
      {children}
    </section>
  );
}
