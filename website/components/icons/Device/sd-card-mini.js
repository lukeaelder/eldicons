import * as React from 'react';

const SdCardMini = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M7 10V4A1 1 0 0 1 8 3H18A1 1 0 0 1 19 4V20A1 1 0 0 1 18 21H6A1 1 0 0 1 5 20V12ZM10 6V8M13 6V8M16 6V8" />
    </svg>
  );
};

export default SdCardMini;
