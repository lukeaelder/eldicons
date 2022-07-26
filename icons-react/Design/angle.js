import * as React from 'react';

const Angle = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M12 4 L3 19H21M15.415 5.97H15.43M17.715 8.67H17.73M19.515 11.771H19.63M20.615 15.171H20.63" />
    </svg>
  );
};

export default Angle;
