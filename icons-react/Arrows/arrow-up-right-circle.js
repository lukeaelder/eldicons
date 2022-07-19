import * as React from 'react'

const ArrowUpRightCircle = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M15 9L9 15M9 9L15 9L15 15" />
      <circle cx={12} cy={12} r={9}></circle>
    </svg>
  )
}

export default ArrowUpRightCircle
