import * as React from 'react'

const Refresh = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 4V9H9M4.5 9A8.1 8.1 0 0 1 20 11M15 15H20V20M19.5 15A8.1 8.1 0 0 1 4 13" />
    </svg>
  )
}

export default Refresh
