import * as React from 'react';

function Repeat({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 12V9A3 3 0 0 1 7 6H20M17 3L20 6L17 9M20 12V15A3 3 0 0 1 17 18H4M7 21L4 18L7 15"/>
  </svg>
}
        
export default Repeat