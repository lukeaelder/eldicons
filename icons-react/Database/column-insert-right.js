import * as React from 'react'

const ColumnInsertRight = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M5 5A1 1 0 0 1 6 4H10A1 1 0 0 1 11 5V19A1 1 0 0 1 10 20H6A1 1 0 0 1 5 19ZM17 10V14M15 12H19" />
    </svg>
  )
}

export default ColumnInsertRight
