import * as React from 'react'

const Link = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M13 5L14 4A4.2 4.2 0 0 1 20 10L16 14A4.2 4.2 0 0 1 10 14M11 19L10 20A4.2 4.2 0 0 1 4 14L8 10A4.2 4.2 0 0 1 14 10" />
    </svg>
  )
}

export default Link
