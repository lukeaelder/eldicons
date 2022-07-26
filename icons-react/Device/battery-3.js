import * as React from 'react';

const Battery3 = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 9A2 2 0 0 1 6 7H17A2 2 0 0 1 19 9V10H20V14H19V15A2 2 0 0 1 17 17H6A2 2 0 0 1 4 15V9M7 10V14M10 10V14M13 10V14" />
    </svg>
  );
};

export default Battery3;
