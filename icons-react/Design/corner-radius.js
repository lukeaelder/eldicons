import * as React from 'react';

function CornerRadius({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 12V8A4 4 0 0 1 8 4H12M16 4V4.01M20 4V4.01M20 8V8.01M20 12V12.01M20 16V16.01M20 20V20.01M16 20V20.01M12 20V20.01M8 20V20.01M4 20V20.01M4 16V16.01"/>
  </svg>
}
        
export default CornerRadius