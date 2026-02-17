import type { ReactNode } from 'react';

interface PlaygroundProps {
  children: ReactNode;
}

export function Playground({ children }: PlaygroundProps) {
  return <div className="playground">{children}</div>;
}

interface PlaygroundItemProps {
  children: ReactNode;
}

export function PlaygroundItem({ children }: PlaygroundItemProps) {
  return <div className="playground__item">{children}</div>;
}
