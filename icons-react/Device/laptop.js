import * as React from 'react';

function Laptop({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 6A1 1 0 0 1 5 5H19A1 1 0 0 1 20 6V16A1 1 0 0 1 19 17H5A1 1 0 0 1 4 16V6M3 20H21"/>
  </svg>
}
        
export default Laptop