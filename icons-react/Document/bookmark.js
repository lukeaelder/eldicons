import * as React from 'react';

function Bookmark({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M8 4H16A2 2 0 0 1 18 6V20L12 16L6 20V6A2 2 0 0 1 8 4"/>
  </svg>
}
        
export default Bookmark