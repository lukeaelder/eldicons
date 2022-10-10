import * as React from 'react';

function Gps({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M7 12L16 8L12 17L11 13zM12 3A9 9 0 0 1 12 21A9 9 0 0 1 12 3"/>
  </svg>
}
        
export default Gps