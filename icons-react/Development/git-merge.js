import * as React from 'react';

function GitMerge({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M6 16V8A4 4 0 0 0 10 12H14A4 4 0 0 1 18 16M6 4A2 2 0 0 1 6 8A2 2 0 0 1 6 4M6 16A2 2 0 0 1 6 20A2 2 0 0 1 6 16M18 16A2 2 0 0 1 18 20A2 2 0 0 1 18 16"/>
  </svg>
}
        
export default GitMerge