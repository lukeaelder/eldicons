import * as React from 'react';

function ArrowUturnLeftDown({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 3H15A6 6 0 0 1 15 15H3M9 21L3 15L9 9"/>
  </svg>
}
        
export default ArrowUturnLeftDown