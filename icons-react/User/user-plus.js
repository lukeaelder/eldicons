import * as React from 'react';

function UserPlus({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21M9 3A4 4 0 0 1 9 11A4 4 0 0 1 9 3M16 11H22M19 8V14"/>
  </svg>
}
        
export default UserPlus