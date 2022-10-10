import * as React from 'react';

function Usb({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M12 17A2 2 0 0 1 12 21 2 2 0 0 1 12 17V16L7 13V10A1 1 0 0 0 7 8 1 1 0 0 0 7 10M12 5.5H10L12 3L14 5.5ZV16M12 14.5L17 12.5V10H16V8H18V10H17"/>
  </svg>
}
        
export default Usb