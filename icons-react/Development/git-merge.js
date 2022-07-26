import * as React from 'react';

const GitMerge = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M6 16V8A4 4 0 0 0 10 12H14A4 4 0 0 1 18 16" />
      <circle cx="6" cy="6" r="2"></circle>
      <circle cx="6" cy="18" r="2"></circle>
      <circle cx="18" cy="18" r="2"></circle>
    </svg>
  );
};

export default GitMerge;
