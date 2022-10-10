import * as React from 'react';

function Identification({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M10 6V5A2 2 0 0 1 14 5V6A2 2 0 0 1 10 6V6H5A2 2 0 0 0 3 8V17A2 2 0 0 0 5 19H19A2 2 0 0 0 21 17V8A2 2 0 0 0 19 6H14M6 16.2A3.05 3.05 0 0 1 11.8 16M9 10A2 2 0 0 1 9 14A2 2 0 0 1 9 10M15 11H18M15 15H17"/>
  </svg>
}
        
export default Identification