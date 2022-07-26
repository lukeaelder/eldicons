import * as React from 'react';

const Haze = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 16H21M3 20H21M3 12H4M5.6 5.6L6.3 6.3M12 3V4M18.4 5.6L17.7 6.3M20 12H21M8 12A4 4 0 0 1 16 12" />
    </svg>
  );
};

export default Haze;
