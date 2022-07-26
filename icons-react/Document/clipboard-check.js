import * as React from 'react';

const ClipboardCheck = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M15 5H17A2 2 0 0 1 19 7V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V7A2 2 0 0 1 7 5H9M11 7A2 2 0 0 1 11 3H13A2 2 0 0 1 13 7H11M9 14L11 16L15 12" />
    </svg>
  );
};

export default ClipboardCheck;
