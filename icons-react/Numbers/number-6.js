import * as React from 'react';

function Number6({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M8 15A4 4 0 0 1 16 15V16A4 4 0 0 1 8 16V8A4 4 0 0 1 16 8"/>
  </svg>
}
        
export default Number6