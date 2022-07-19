import * as React from 'react'

const Wallet2 = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 18V6A2 2 0 0 1 6 4H16A1 1 0 0 1 17 5V8H18A1 1 0 0 1 19 9V12H20V16H16A2 2 0 0 1 16 12H19M19 16V19A1 1 0 0 1 18 20H6A2 2 0 0 1 4 18M4 6A2 2 0 0 0 6 8H17" />
    </svg>
  )
}

export default Wallet2
