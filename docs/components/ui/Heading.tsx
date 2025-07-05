import React from 'react';

interface HeadingProps {
  title: string;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({ title, id, level = 3 }) => {
  const Tag: React.ElementType = `h${level}`;
  const className = level === 2 ? 'section-heading' : 'content-heading';

  return (
    <Tag className={className} id={id}>
      {title}
    </Tag>
  );
};

export default Heading;
