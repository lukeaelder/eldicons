import * as React from 'react';

const Keyboard = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M2 8A2 2 0 0 1 4 6H20A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H4A2 2 0 0 1 2 16V8M10 14H14M6 14H6.01M18 14H18.01M6 10H6.01M10 10H10.01M14 10H14.01M18 10H18.01" />
    </svg>
  );
};

export default Keyboard;
