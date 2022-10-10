import * as React from 'react';

function Desktop2({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 5A1 1 0 0 1 4 4H20A1 1 0 0 1 21 5V16A1 1 0 0 1 20 17H4A1 1 0 0 1 3 16V5M9 17V21M7 21H17M15 17V21"/>
  </svg>
}
        
export default Desktop2