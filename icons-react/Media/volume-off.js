import * as React from 'react';

const VolumeOff = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 14V10A1 1 0 0 1 4 9H6 L10 5C12 3 12 4 12 5V19C12 20 12 21 10 19L6 15H4A1 1 0 0 1 3 14M17 10L21 14M17 14L21 10" />
    </svg>
  );
};

export default VolumeOff;
