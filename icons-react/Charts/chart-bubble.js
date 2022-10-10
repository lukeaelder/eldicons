import * as React from 'react';

function ChartBubble({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M6 13A3 3 0 0 1 6 19A3 3 0 0 1 6 13M16 17A2 2 0 0 1 16 21A2 2 0 0 1 16 17M14.5 3A4.5 4.5 0 0 1 14.5 12A4.5 4.5 0 0 1 14.5 3"/>
  </svg>
}
        
export default ChartBubble