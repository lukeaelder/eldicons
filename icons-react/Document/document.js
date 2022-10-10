import * as React from 'react';

function Document({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M5 5V19A2 2 0 0 0 7 21H17A2 2 0 0 0 19 19V8L14 3H7A2 2 0 0 0 5 5"/>
  </svg>
}
        
export default Document