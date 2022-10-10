import * as React from 'react';

function GitFork({size=24, color="currentColor", stroke=2, ...props}) {
  return <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    strokeWidth={stroke}
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
      <path fill="none" stroke="none" d="M0 0h24v24H0z"/>
      <path d="M7 8V10A2 2 0 0 0 9 12H15A2 2 0 0 0 17 10V8M12 12V16M7 4A2 2 0 0 1 7 8A2 2 0 0 1 7 4M12 16A2 2 0 0 1 12 20A2 2 0 0 1 12 16M17 4A2 2 0 0 1 17 8A2 2 0 0 1 17 4"/>
  </svg>
}
        
export default GitFork