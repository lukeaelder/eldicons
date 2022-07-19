import * as React from 'react'

const At = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M16 12V13.5A2.5 2.5 0 0 0 21 13.5V11A9 9 0 1 0 15.5 20.28" />
      <circle cx="12" cy="12" r="4"></circle>
    </svg>
  )
}

export default At
