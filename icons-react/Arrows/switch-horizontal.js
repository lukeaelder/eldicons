import * as React from 'react';

function SwitchHorizontal({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M8 7H20M16 3L20 7L16 11M4 17H16M8 13L4 17L8 20"/>
  </svg>
}
        
export default SwitchHorizontal