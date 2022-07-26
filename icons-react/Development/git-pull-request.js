import * as React from 'react';

const GitPullRequest = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M6 8V16M18 16V8A2 2 0 0 0 16 6H12M14 3L11 6L14 9" />
      <circle cx="6" cy="6" r="2"></circle>
      <circle cx="6" cy="18" r="2"></circle>
      <circle cx="18" cy="18" r="2"></circle>
    </svg>
  );
};

export default GitPullRequest;
