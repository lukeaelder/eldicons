import * as React from 'react'

const Number9 = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M16 9A4 4 0 0 1 8 9V8A4 4 0 0 1 16 8V16A4 4 0 0 1 8 16" />
    </svg>
  )
}

export default Number9
