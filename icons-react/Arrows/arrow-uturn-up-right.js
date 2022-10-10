import * as React from 'react';

function ArrowUturnUpRight({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 12V15A6 6 0 0 0 15 15V3M21 9L15 3L9 9"/>
  </svg>
}
        
export default ArrowUturnUpRight