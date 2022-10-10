import * as React from 'react';

function Meteor({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 13A8 8 0 0 0 20 13V2.5L13 5.75V3.25L8 6A8 8 0 0 0 4 13M12 8A4 4 0 0 1 12 16A4 4 0 0 1 12 8"/>
  </svg>
}
        
export default Meteor