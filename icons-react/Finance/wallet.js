import * as React from 'react';

function Wallet({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 18V6A2 2 0 0 1 6 4H16A1 1 0 0 1 17 5V8H19A1 1 0 0 1 20 9V19A1 1 0 0 1 19 20H6A2 2 0 0 1 4 18M4 6A2 2 0 0 0 6 8H17M14 14H17"/>
  </svg>
}
        
export default Wallet