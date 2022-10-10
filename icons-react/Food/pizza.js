import * as React from 'react';

function Pizza({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 3L3.5 19.5A20 20 0 0 0 20.5 19.5L12 3M5.5 16A17 17 0 0 0 18.5 16M13 11V11.01M11 14V14.01"/>
  </svg>
}
        
export default Pizza