import * as React from 'react';

const Database = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 7A6 3 0 0 0 20 7A6 3 0 0 0 4 7V17A6 3 0 0 0 20 17V7M4 12A6 3 0 0 0 20 12" />
    </svg>
  );
};

export default Database;
