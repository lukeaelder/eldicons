import * as React from 'react';

const Copy = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M6 4H14A2 2 0 0 1 16 6V8M8 16H6A2 2 0 0 1 4 14V6A2 2 0 0 1 6 4" />
      <rect x="8" y="8" width="12" height="12" rx="2"></rect>
    </svg>
  );
};

export default Copy;
