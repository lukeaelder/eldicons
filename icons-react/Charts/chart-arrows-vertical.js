import * as React from 'react';

const ChartArrowsVertical = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 21H21M6 21V3M3 6L6 3L9 6M9 15L12 12L15 15M15 10L18 7L21 10M12 21V12M18 21V7" />
    </svg>
  );
};

export default ChartArrowsVertical;
