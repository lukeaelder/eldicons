import * as React from 'react';

const Login = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M16 16V17A3 3 0 0 1 13 20H6A3 3 0 0 1 3 17V7A3 3 0 0 1 6 4H13A3 3 0 0 1 16 7V8M7 12H21M11 8L7 12L11 16" />
    </svg>
  );
};

export default Login;
