import * as React from 'react';

function Logout({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M13 16V18A2 2 0 0 1 11 20H5A2 2 0 0 1 3 18V6A2 2 0 0 1 5 4H11A2 2 0 0 1 13 6V8M21 12H7M17 8L21 12L17 16"/>
  </svg>
}
        
export default Logout