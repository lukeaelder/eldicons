import * as React from 'react';

const TextWrap = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 5H20M4 12H16.5A3 3 0 0 1 16.5 19H13M4 19H8M15 17L13 19L15 21" />
    </svg>
  );
};

export default TextWrap;
