import * as React from 'react';

function Adjustments({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M6 4V14M6 18V20M12 4V6M12 10V20M18 4V14M18 18V20M6 14A2 2 0 0 1 6 18A2 2 0 0 1 6 14M12 6A2 2 0 0 1 12 10A2 2 0 0 1 12 6M18 14A2 2 0 0 1 18 18A2 2 0 0 1 18 14"/>
  </svg>
}
        
export default Adjustments