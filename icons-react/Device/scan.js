import * as React from 'react';

function Scan({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 7V6A2 2 0 0 1 6 4H8M16 4H18A2 2 0 0 1 20 6V7M20 17V18A2 2 0 0 1 18 20H16M8 20H6A2 2 0 0 1 4 18V17M5 12H19"/>
  </svg>
}
        
export default Scan