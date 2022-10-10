import * as React from 'react';

function Chat({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 20V8A3 3 0 0 1 6 5H18A3 3 0 0 1 21 8V14A3 3 0 0 1 18 17H6z"/>
  </svg>
}
        
export default Chat