import * as React from 'react';

function ArrowUturnDownLeft({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M21 12V9A6 6 0 0 0 9 9V21M3 15L9 21L15 15"/>
  </svg>
}
        
export default ArrowUturnDownLeft