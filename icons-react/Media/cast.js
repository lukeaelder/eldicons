import * as React from 'react';

function Cast({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M15 19H18A3 3 0 0 0 21 16V8A3 3 0 0 0 18 5H6A3 3 0 0 0 3.2 7M3 19V19.01M3 15A4 4 0 0 1 7 19M3 11A8 8 0 0 1 11 19"/>
  </svg>
}
        
export default Cast