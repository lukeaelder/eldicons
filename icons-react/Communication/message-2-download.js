import * as React from 'react';

function Message2Download({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 8A3 3 0 0 1 6 5H18A3 3 0 0 1 21 8V14A3 3 0 0 1 18 17H15L12 20L9 17H6A3 3 0 0 1 3 14zM12 14L12 8M14 12L12 14L10 12"/>
  </svg>
}
        
export default Message2Download