import * as React from 'react';

const Desktop = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 5A1 1 0 0 1 4 4H20A1 1 0 0 1 21 5V16A1 1 0 0 1 20 17H4A1 1 0 0 1 3 16V5M12 17V20M8 21H16" />
    </svg>
  );
};

export default Desktop;
