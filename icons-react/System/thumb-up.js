import * as React from 'react'

const ThumbUp = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 19V12A1 1 0 0 1 4 11H7A4 4 0 0 0 11 7V6A2 2 0 0 1 15 6V11H18A2 2 0 0 1 20 13L19 18A4 4 0 0 1 16 21H12L7 20H4A1 1 0 0 1 3 19M7 11V20" />
    </svg>
  )
}

export default ThumbUp
