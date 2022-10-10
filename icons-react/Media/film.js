import * as React from 'react';

function Film({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 5A1 1 0 0 1 4 4H20A1 1 0 0 1 21 5V19A1 1 0 0 1 20 20H4A1 1 0 0 1 3 19ZM7 4V20M17 4V20M3 8H7M3 12H21M3 16H7M17 8H21M17 16H21"/>
  </svg>
}
        
export default Film