import React from 'react';

interface HeadingProps {
  title: string;
  id?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, id }) => {
  return (
    <h3 className="content-heading" id={id}>
      {title}
    </h3>
  );
};

export default Heading;
