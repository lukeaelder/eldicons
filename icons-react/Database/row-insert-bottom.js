import * as React from 'react';

function RowInsertBottom({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M5 5H19A1 1 0 0 1 20 6V10A1 1 0 0 1 19 11H5A1 1 0 0 1 4 10V6A1 1 0 0 1 5 5M12 15V19M10 17H14"/>
  </svg>
}
        
export default RowInsertBottom