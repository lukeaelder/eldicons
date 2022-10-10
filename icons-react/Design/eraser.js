import * as React from 'react';

function Eraser({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M19 20H8.5L4.29 15.7A1 1 0 0 1 4.29 14.29L14.29 4.29A1 1 0 0 1 15.7 4.29L20.7 9.29A1 1 0 0 1 20.7 10.7L11.5 20M18 13.3L11.7 7"/>
  </svg>
}
        
export default Eraser