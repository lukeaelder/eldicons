import * as React from 'react';

function ArrowUpLeftCircle({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M9 9L15 15M9 15L9 9L15 9M12 3A9 9 0 0 1 12 21A9 9 0 0 1 12 3"/>
  </svg>
}
        
export default ArrowUpLeftCircle