import * as React from 'react';

function Mobile({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M6 19V5A2 2 0 0 18 3H16A2 2 0 0 1 18 5V19A2 2 0 0 1 16 21H8A2 2 0 0 1 6 19M12 18V18.01"/>
  </svg>
}
        
export default Mobile