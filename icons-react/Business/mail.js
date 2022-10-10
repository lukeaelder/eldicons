import * as React from 'react';

function Mail({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 8A2 2 0 0 1 5 6H19A2 2 0 0 1 21 8V17A2 2 0 0 1 19 19H5A2 2 0 0 1 3 17V8M3 9L10.5 13.5A3 3 0 0 0 13.5 13.5L21 9"/>
  </svg>
}
        
export default Mail