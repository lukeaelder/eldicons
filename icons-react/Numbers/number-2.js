import * as React from 'react';

function Number2({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M8 8A4 4 0 1 1 16 8C16 9.098 15.436 10.025 14.841 10.815L8 20H16"/>
  </svg>
}
        
export default Number2