import * as React from 'react';

const Cash = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M7 15V11A2 2 0 0 1 9 9H17V7A2 2 0 0 0 15 5H5A2 2 0 0 0 3 7V13A2 2 0 0 0 5 15ZV17A2 2 0 0 0 9 19H19A2 2 0 0 0 21 17V11A2 2 0 0 0 19 9H17M14 12A2 2 0 0 1 14 16A2 2 0 0 1 14 12" />
    </svg>
  );
};

export default Cash;
