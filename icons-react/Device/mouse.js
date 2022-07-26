import * as React from 'react';

const Mouse = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M6 7A4 4 0 0 1 10 3H14A4 4 0 0 1 18 7V17A4 4 0 0 1 14 21H10A4 4 0 0 1 6 17V7M12 7V11" />
    </svg>
  );
};

export default Mouse;
