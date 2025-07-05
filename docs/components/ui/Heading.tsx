import React from 'react';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h3 className="content-heading">{title}</h3>;
};

export default Heading;
