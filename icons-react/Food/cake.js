import * as React from 'react';

const Cake = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 21H21V14A2 2 0 0 0 19 12H5A2 2 0 0 0 3 14ZM3 15.5A2.5 2.5 0 0 1 4.5 16 2.5 2.5 0 0 0 6 16.5 2.5 2.5 0 0 0 7.5 16 2.5 2.5 0 0 1 9 15.5 2.5 2.5 0 0 1 10.5 16 2.5 2.5 0 0 0 12 16.5 2.5 2.5 0 0 0 13.5 16 2.5 2.5 0 0 1 15 15.5 2.5 2.5 0 0 1 16.5 16 2.5 2.5 0 0 0 18 16.5 2.5 2.5 0 0 0 19.5 16 2.5 2.5 0 0 1 21 15.5M6 12V10A2 2 0 0 1 8 8H16A2 2 0 0 1 18 10V12M9 3V3.01M12 3V3.01M15 3V3.01M9 6V8M12 6V8M15 6V8" />
    </svg>
  );
};

export default Cake;
