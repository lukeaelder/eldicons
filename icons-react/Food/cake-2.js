import * as React from 'react';

function Cake2({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 15V20H21V12A3 3 0 0 0 18 9H6A3 3 0 0 0 3 12V15A2.5 2.5 0 0 0 6 14 2.5 2.5 0 0 1 8 13 2.5 2.5 0 0 1 10 14 2.5 2.5 0 0 0 12 15 2.5 2.5 0 0 0 14 14 2.5 2.5 0 0 1 16 13 2.5 2.5 0 0 1 18 14 2.5 2.5 0 0 0 21 15M12 4L13.465 5.638A2 2 0 1 1 10.45 5.638Z"/>
  </svg>
}
        
export default Cake2