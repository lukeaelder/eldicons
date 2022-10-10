import * as React from 'react';

function MoodHappy({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 3A9 9 0 0 1 12 21A9 9 0 0 1 12 3M9 9V9.01M15 9V9.01M8 13H16A4 4 0 0 1 8 13"/>
  </svg>
}
        
export default MoodHappy