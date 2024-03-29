import * as React from 'react';

function SdCard({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M9.5 3H18A1 1 0 0 1 19 4V20A1 1 0 0 1 18 21H6A1 1 0 0 1 5 20V7.5ZM10 7V8M13 6V8M16 6V8"/>
  </svg>
}
        
export default SdCard