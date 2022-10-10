import * as React from 'react';

function Triangle({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M5 19A2 2 0 0 1 3.16 16.25L10.24 4A2 2 0 0 1 13.74 4L20.84 16.25A2 2 0 0 1 19 19Z"/>
  </svg>
}
        
export default Triangle