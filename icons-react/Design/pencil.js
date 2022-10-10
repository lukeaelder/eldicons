import * as React from 'react';

function Pencil({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 20V16L14.5 5.5A1.5 1.5 0 0 1 18.5 9.5L8 20H4M13.5 6.5L17.5 10.5"/>
  </svg>
}
        
export default Pencil