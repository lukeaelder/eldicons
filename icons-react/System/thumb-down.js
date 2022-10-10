import * as React from 'react';

function ThumbDown({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 5V12A1 1 0 0 0 4 13H7A4 4 0 0 1 11 17V18A2 2 0 0 0 15 18V13H18A 2 2 0 0 0 20 11L19 6A 4 4 0 0 0 16 3H12L7 4H4A1 1 0 0 0 3 5M7 4V13"/>
  </svg>
}
        
export default ThumbDown