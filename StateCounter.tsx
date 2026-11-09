'use client';

import { useState } from 'react';

interface StateCounterProps {
  name: string;
  description: string;
}

export default function StateCounter({ name, description }: StateCounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="state-counter">
      <div>
        <strong>{name}</strong>
        <p>{description}</p>
      </div>
      <button type="button" onClick={() => setCount(count + 1)}>
        + {count}
      </button>
    </div>
  );
}
