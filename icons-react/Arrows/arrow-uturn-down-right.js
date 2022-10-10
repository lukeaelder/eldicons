import * as React from 'react';

function ArrowUturnDownRight({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 12V9A6 6 0 0 1 15 9V21M21 15L15 21L9 15"/>
  </svg>
}
        
export default ArrowUturnDownRight