import * as React from 'react';

function At({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M16 12V13.5A2.5 2.5 0 0 0 21 13.5V11A9 9 0 1 0 15.5 20.28M12 8A4 4 0 0 1 12 16A4 4 0 0 1 12 8"/>
  </svg>
}
        
export default At