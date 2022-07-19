import * as React from 'react'

const ExclamationCircle = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <circle cx={12} cy={12} r={9}></circle>
      <path d="M12 8V12M12 16V16.01" />
    </svg>
  )
}

export default ExclamationCircle
