import * as React from 'react';

function ClipboardCopy({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M14 5H16A2 2 0 0 1 18 7V10M18 18V19A2 2 0 0 1 16 21H6A2 2 0 0 1 4 19V7A2 2 0 0 1 6 5H8M10 7A2 2 0 0 1 10 3H12A2 2 0 0 1 12 7H10M20 14H10M13 11L10 14L13 17"/>
  </svg>
}
        
export default ClipboardCopy