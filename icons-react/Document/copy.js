import * as React from 'react';

function Copy({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M6 4H14A2 2 0 0 1 16 6V8M8 16H6A2 2 0 0 1 4 14V6A2 2 0 0 1 6 4M10 8H18A2 2 0 0 1 20 10V18A2 2 0 0 1 18 20H10A2 2 0 0 1 8 18V10A2 2 0 0 1 10 8"/>
  </svg>
}
        
export default Copy