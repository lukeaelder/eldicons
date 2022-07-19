import * as React from 'react'

const Pin = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M9 11A3 3 0 0 1 15 11A3 3 0 0 1 9 11M17.657 16.657L13.414 20.9A2 2 0 0 1 10.587 20.9L6.343 16.657A8 8 0 1 1 17.657 16.657Z" />
    </svg>
  )
}

export default Pin
