import * as React from 'react';

function ChartArrowsHorizontal({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 3V21M3 6H21M3 12H12M3 18H17M18 3L21 6L18 9M9 9L12 12L9 15M14 15L17 18L14 21"/>
  </svg>
}
        
export default ChartArrowsHorizontal