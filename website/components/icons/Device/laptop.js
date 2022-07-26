import * as React from 'react';

const Laptop = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 6A1 1 0 0 1 5 5H19A1 1 0 0 1 20 6V16A1 1 0 0 1 19 17H5A1 1 0 0 1 4 16V6M3 20H21" />
    </svg>
  );
};

export default Laptop;
