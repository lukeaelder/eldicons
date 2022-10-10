import * as React from 'react';

function VolumeOff({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 14V10A1 1 0 0 1 4 9H6 L10 5C12 3 12 4 12 5V19C12 20 12 21 10 19L6 15H4A1 1 0 0 1 3 14M17 10L21 14M17 14L21 10"/>
  </svg>
}
        
export default VolumeOff