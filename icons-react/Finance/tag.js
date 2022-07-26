import * as React from 'react';

const Tag = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M7 3 H12Q13 3 14 4L20 10Q22 12 20 14L14 20Q12 22 10 20L4 14Q3 13 3 12L3 7A4 4 0 0 1 7 3M7 7V7.01" />
    </svg>
  );
};

export default Tag;
