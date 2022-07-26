import * as React from 'react';

const LetterO = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M17 9A5 5 0 0 0 7 9V15A5 5 0 0 0 17 15Z" />
    </svg>
  );
};

export default LetterO;