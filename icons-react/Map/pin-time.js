import * as React from 'react';

function PinTime({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 7V12H16M17.657 16.657L13.414 20.9A2 2 0 0 1 10.587 20.9L6.343 16.657A8 8 0 1 1 17.657 16.657Z"/>
  </svg>
}
        
export default PinTime