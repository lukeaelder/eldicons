import * as React from 'react';

const MoodSad = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M12 3A9 9 0 0 1 12 21A9 9 0 0 1 12 3M9 11V11.01M15 11V11.01M9.5 16A3.5 3.5 0 0 1 14.5 16" />
    </svg>
  );
};

export default MoodSad;
