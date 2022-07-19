import * as React from 'react'

const Braces = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M8 4H7A2 2 0 0 0 5 6V9A2 3 0 0 1 3 12A2 3 0 0 1 5 15V18A2 2 0 0 0 7 20H8M16 4H17A2 2 0 0 1 19 6V9A2 3 0 0 0 21 12A2 3 0 0 0 19 15V18A 2 2 0 0 1 17 20H16" />
    </svg>
  )
}

export default Braces
