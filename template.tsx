import type { ReactNode } from 'react';
import StateCounter from '../../components/StateCounter';

interface PostTemplateProps {
  children: ReactNode;
}

export default function PostTemplate({ children }: PostTemplateProps) {
  return (
    <div>
      <div className="demo-panel secondary-demo">
        <div className="demo-panel-head"><span className="small-dot purple" /> ШАБЛОН СТАТЬИ <span className="demo-tag">template.tsx</span></div>
        <StateCounter name="Счётчик Template" description="При смене номера статьи создаётся заново и снова равен нулю." />
      </div>
      {children}
    </div>
  );
}
