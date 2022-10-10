import * as React from 'react';

function ArrowUturnLeftUp({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 21H15A6 6 0 0 0 15 9H3M9 3L3 9L9 15"/>
  </svg>
}
        
export default ArrowUturnLeftUp