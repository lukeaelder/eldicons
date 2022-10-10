import * as React from 'react';

function Divide({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M5 12H19M12 5A1 1 0 0 1 12 7A1 1 0 0 1 12 5M12 17A1 1 0 0 1 12 19A1 1 0 0 1 12 17"/>
  </svg>
}
        
export default Divide