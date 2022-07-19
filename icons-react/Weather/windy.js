import * as React from 'react'

const Windy = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M11.5 4A2.5 2.5 0 1 1 13.5 8H5A2 2 0 0 0 5 12H18.5A2.5 2.5 0 1 1 16.5 16M4 16H10.5A2.5 2.5 0 1 1 8.5 20" />
    </svg>
  )
}

export default Windy
