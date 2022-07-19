import * as React from 'react'

const Crop = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M8 5V15A1 1 0 0 0 9 16H19M5 8H15A1 1 0 0 1 16 9V19" />
    </svg>
  )
}

export default Crop
