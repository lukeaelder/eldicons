import * as React from 'react';

function Filter({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 4A1 1 0 0 1 4 3H20A1 1 0 0 1 21 4V7L14 14V17L10 21V14L3 7V4"/>
  </svg>
}
        
export default Filter