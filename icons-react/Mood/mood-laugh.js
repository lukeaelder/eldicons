import * as React from 'react';

function MoodLaugh({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 3A9 9 0 0 1 12 21A9 9 0 0 1 12 3M8 9A2 2 0 0 1 10 9M14 9A2 2 0 0 1 16 9M8 13A20 20 0 0 1 16 13A4 4 0 0 1 8 13"/>
  </svg>
}
        
export default MoodLaugh