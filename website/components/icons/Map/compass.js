import * as React from 'react';

const Compass = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <circle cx={12} cy={12} r={9}></circle>
      <path d="M8.5 15.5L13.5 13.5L15.5 8.5L10.5 10.5Z" />
    </svg>
  );
};

export default Compass;
