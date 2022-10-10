import * as React from 'react';

function Compass({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M8.5 15.5L13.5 13.5L15.5 8.5L10.5 10.5ZM12 3A9 9 0 0 1 12 21A9 9 0 0 1 12 3"/>
  </svg>
}
        
export default Compass