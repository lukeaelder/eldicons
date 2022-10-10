import * as React from 'react';

function Trash3({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 7H20M9 7V4A1 1 0 0 1 10 3H14A1 1 0 0 1 15 4V7M19 7L18.133 19.142A2 2 0 0 1 16.138 21H7.862A2 2 0 0 1 5.867 19.142L5 7"/>
  </svg>
}
        
export default Trash3