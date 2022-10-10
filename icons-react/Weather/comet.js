import * as React from 'react';

function Comet({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 9L7.5 12.5M4 4L11 11M9 4L12.5 7.5M15.5 11L17 14L20 14.5L18 16.5L18.5 20L15.5 18.5L12.5 20L13 16.5L11 14.5L14 14Z"/>
  </svg>
}
        
export default Comet