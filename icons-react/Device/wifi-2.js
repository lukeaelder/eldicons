import * as React from 'react';

const Wifi2 = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M12 18V18.01M9 15A4 4 0 0 1 15 15M6 12A8 8 0 0 1 18 12" />
    </svg>
  );
};

export default Wifi2;
