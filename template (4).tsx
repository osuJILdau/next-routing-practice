import type { ReactNode } from 'react';

interface BlogTemplateProps {
  children: ReactNode;
}

export default function BlogTemplate({ children }: BlogTemplateProps) {
  return <div className="blog-template">{children}</div>;
}
