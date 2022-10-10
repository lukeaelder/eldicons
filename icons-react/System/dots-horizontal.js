import * as React from 'react';

function DotsHorizontal({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M5 11A1 1 0 0 1 5 13A1 1 0 0 1 5 11M12 11A1 1 0 0 1 12 13A1 1 0 0 1 12 11M19 11A1 1 0 0 1 19 13A1 1 0 0 1 19 11"/>
  </svg>
}
        
export default DotsHorizontal