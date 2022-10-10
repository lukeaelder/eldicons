import * as React from 'react';

function ClipboardX({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M15 5H17A2 2 0 0 1 19 7V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V7A2 2 0 0 1 7 5H9M11 7A2 2 0 0 1 11 3H13A2 2 0 0 1 13 7H11M10 12L 14 16M10 16L14 12"/>
  </svg>
}
        
export default ClipboardX