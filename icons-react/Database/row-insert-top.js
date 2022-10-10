import * as React from 'react';

function RowInsertTop({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M5 13H19A1 1 0 0 1 20 14V18A1 1 0 0 1 19 19H5A1 1 0 0 1 4 18V14A1 1 0 0 1 5 13M12 5V9M10 7H14"/>
  </svg>
}
        
export default RowInsertTop