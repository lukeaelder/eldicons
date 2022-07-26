import * as React from 'react';

const SwitchVertical = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M7 4V16M3 8L7 4L11 8M17 8V20M13 16L17 20L21 16" />
    </svg>
  );
};

export default SwitchVertical;
