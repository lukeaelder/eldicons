import * as React from 'react'

const Flag = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M5 21V5A5 5 0 0 1 12 5A5 5 0 0 0 19 5V14A5 5 0 0 1 12 14A5 5 0 0 0 5 14" />
    </svg>
  )
}

export default Flag
