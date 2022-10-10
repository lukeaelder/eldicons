import * as React from 'react';

function CubeTransparent({size=24, color="currentColor", stroke=2, ...props}) {
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
      <path d="M4 9.5V7L6 8M6 6L4 7M10 4L12 3L14 4M18 6L20 7V9.5M18 8L20 7M10 10L12 11L14 10M12 11V13.5M4 14.5V17L6 18M10 20L12 21L14 20M12 21V18.5M20 14.5V17L18 18"/>
  </svg>
}
        
export default CubeTransparent