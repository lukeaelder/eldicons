import * as React from 'react';

function Capsule({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M15.5 15.5L8.5 8.5L12.5 4.5A3.5 3.5 0 0 1 19.5 11.5L11.5 19.5A3.5 3.5 0 0 1 4.5 12.5L8.5 8.5"/>
  </svg>
}
        
export default Capsule