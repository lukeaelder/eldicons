import * as React from 'react';

const ChartBubble = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <circle cx="6" cy="16" r="3"></circle>
      <circle cx="16" cy="19" r="2"></circle>
      <circle cx="14.5" cy="7.5" r="4.5"></circle>
    </svg>
  );
};

export default ChartBubble;
