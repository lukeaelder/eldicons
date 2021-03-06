import * as React from 'react'

const Printer = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M17 17V15A2 2 0 0 0 15 13H9A2 2 0 0 0 7 15V19A2 2 0 0 0 9 21H15A2 2 0 0 0 17 19V17H19A2 2 0 0 0 21 15V11A2 2 0 0 0 19 9H5A2 2 0 0 0 3 11V15A2 2 0 0 0 5 17H7M7 9V5A2 2 0 0 1 9 3H15A2 2 0 0 1 17 5V9" />
    </svg>
  )
}

export default Printer
