import React from 'react';

interface PlaygroundProps {
  children: React.ReactNode;
}

export const Playground: React.FC<PlaygroundProps> = ({ children }) => {
  return <div className="playground">{children}</div>;
};

interface PlaygroundItemProps {
  children: React.ReactNode;
}

export const PlaygroundItem: React.FC<PlaygroundItemProps> = ({ children }) => {
  return <div className="playground__item">{children}</div>;
};
