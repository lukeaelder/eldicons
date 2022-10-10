import * as React from 'react';

function TableExport({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M11.5 20H6A2 2 0 0 1 4 18V6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V13.5M10 5V20M4 10H20M14 19H21M18 16L21 19L18 22"/>
  </svg>
}
        
export default TableExport