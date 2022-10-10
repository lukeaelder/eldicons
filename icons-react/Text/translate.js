import * as React from 'react';

function Translate({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 5H15M9 3V5M13 5A18 20 0 0 1 3 18M6.5 9A20 20 0 0 0 10 14.5M11 21L16 11L21 21M13 18H19"/>
  </svg>
}
        
export default Translate