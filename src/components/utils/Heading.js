import React from 'react';

export default function Heading({ level, title }) {
  const H = `h${level}`;
  return (
    <div>
      <H>{title}</H>
    </div>
  );
}
