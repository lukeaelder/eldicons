import * as React from 'react';

function ChartPie({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M11 13H21A9 9 0 1 1 11 3V13M15 9H20.5A9 9 0 0 0 15 3.5V9"/>
  </svg>
}
        
export default ChartPie