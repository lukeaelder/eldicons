import * as React from 'react';

function ChartPie2({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M10.5 6L10.5 13.5L18 13.5A7.5 7.5 0 1 1 10.5 6M13.5 3L13.5 10.5L21 10.5A7 7.5 0 0 0 13.5 3"/>
  </svg>
}
        
export default ChartPie2