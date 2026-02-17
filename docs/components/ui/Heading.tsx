import type { ElementType } from 'react';

interface HeadingProps {
  title: string;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const LEVEL_CLASS_NAME: Record<number, string> = {
  2: 'section-heading',
  3: 'content-heading',
};

function Heading({ title, id, level = 3 }: HeadingProps) {
  const Tag: ElementType = `h${level}`;
  const className = LEVEL_CLASS_NAME[level] ?? '';

  return (
    <Tag className={className} id={id}>
      {title}
    </Tag>
  );
}

export default Heading;
