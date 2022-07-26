import * as React from 'react';

const Photo = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 15L8 11A3 5 0 0 1 11 11L16 16M14 14L15 13A3 5 0 0 1 18 13L20 15M4 17V7A3 3 0 0 1 7 4H17A3 3 0 0 1 20 7V17A3 3 0 0 1 17 20H7A3 3 0 0 1 4 17M15 8V8.01" />
    </svg>
  );
};

export default Photo;
