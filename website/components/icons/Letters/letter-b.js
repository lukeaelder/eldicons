import * as React from 'react';

const LetterB = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M7 20V4H13A4 4 0 0 1 13 12A4 4 0 0 1 13 20ZM7 12H13" />
    </svg>
  );
};

export default LetterB;
