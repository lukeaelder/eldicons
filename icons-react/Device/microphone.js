import * as React from 'react';

function Microphone({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M5 11A7 7 0 0 0 19 11M12 18V22M8 22H16M9 11V5A3 3 0 0 1 15 5V11A3 3 0 0 1 9 11"/>
  </svg>
}
        
export default Microphone