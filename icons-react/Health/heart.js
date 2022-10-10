import * as React from 'react';

function Heart({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4.5 12.572A5 5 0 1 1 12 6A5 5 0 1 1 19.5 12.572L12 20Z"/>
  </svg>
}
        
export default Heart