import * as React from 'react';

const Qrcode2 = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 5A1 1 0 0 1 5 4H9A1 1 0 0 1 10 5V9A1 1 0 0 1 9 10H5A 1 1 0 0 1 4 9V5M7 7V7.01M14 5A1 1 0 0 1 15 4H19A1 1 0 0 1 20 5V9A1 1 0 0 1 19 10H15A1 1 0 0 1 14 9V5M17 7V7.01M4 15A1 1 0 0 1 5 14H9A1 1 0 0 1 10 15V19A1 1 0 0 1 9 20H5A1 1 0 0 1 4 19V15M7 17V17.01M14 14V14.01M17 14H20M14 20V17H17M20 17V20H17" />
    </svg>
  );
};

export default Qrcode2;
