import * as React from 'react';

function Shuffle({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M18 3L21 6L18 9M18 21L21 18L18 15M3 6C9 6 10 9 11 12S13 18 18 18H21M3 18C9 18 10 15 11 12S13 6 18 6H21"/>
  </svg>
}
        
export default Shuffle