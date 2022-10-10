import * as React from 'react';

function Rainbow({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M2 17A10 10 0 0 1 22 17M6 17A6 6 0 0 1 18 17M10 17A2 2 0 0 1 14 17"/>
  </svg>
}
        
export default Rainbow