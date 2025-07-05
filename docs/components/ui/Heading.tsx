import React from 'react';

interface HeadingProps {
  title: string;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({ title, id, level = 3 }) => {
  const Tag: React.ElementType = `h${level}`;
  let className = '';
  switch (level) {
    case 2:
      className = 'section-heading';
      break;
    case 3:
      className = 'content-heading';
      break;
    default:
      className = '';
  }

  return (
    <Tag className={className} id={id}>
      {title}
    </Tag>
  );
};

export default Heading;
