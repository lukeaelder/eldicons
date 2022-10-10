import * as React from 'react';

function LetterS({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M17 8A4 4 0 0 0 13 4H11A4 4 0 0 0 11 12H13A4 4 0 0 1 13 20H11A4 4 0 0 1 7 16"/>
  </svg>
}
        
export default LetterS