import * as React from 'react';

const Chip = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M5 17V7A2 2 0 0 1 7 5 H17A2 2 0 0 1 19 7V17A2 2 0 0 1 17 19H7A2 2 0 0 1 5 17M3 15H5M3 9H5M9 3V5M15 3V5M21 9H19M21 15H19M15 21V19M9 21V19M9 9H15V15H9V9" />
    </svg>
  );
};

export default Chip;
