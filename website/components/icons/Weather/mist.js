import * as React from 'react';

const Mist = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M5 5H7M11 5H21M3 10H6M10 10H11M15 10H19M5 15H9M13 15H14M18 15H21M3 20H13M17 20H19" />
    </svg>
  );
};

export default Mist;
