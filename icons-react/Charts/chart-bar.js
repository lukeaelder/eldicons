import * as React from 'react';

function ChartBar({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M9 19A2 2 0 0 1 7 21H5A2 2 0 0 1 3 19V13A2 2 0 0 1 5 11H7A2 2 0 0 1 9 13V19A2 2 0 0 0 11 21H13A2 2 0 0 0 15 19V5A2 2 0 0 1 17 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H17A2 2 0 0 1 15 19M9 13V9A2 2 0 0 1 11 7H13A2 2 0 0 1 15 9"/>
  </svg>
}
        
export default ChartBar