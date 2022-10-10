import * as React from 'react';

function GitCommit({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 3V9M12 15 V21M12 9A3 3 0 0 1 12 15A3 3 0 0 1 12 9"/>
  </svg>
}
        
export default GitCommit