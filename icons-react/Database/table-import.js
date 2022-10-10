import * as React from 'react';

function TableImport({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 13.5V6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H12M2 19H9M6 16L9 19L6 22M4 10H20M10 4V15.5"/>
  </svg>
}
        
export default TableImport