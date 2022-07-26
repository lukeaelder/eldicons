import * as React from 'react';

const ArrowsExpand = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 4L9 9M4 8V4H8M20 4L15 9M16 4H20V8M4 20L 9 15M4 16V20 H8M20 20L15 15M20 16V20H16" />
    </svg>
  );
};

export default ArrowsExpand;
