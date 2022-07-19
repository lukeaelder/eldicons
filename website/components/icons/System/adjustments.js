import * as React from 'react'

const Adjustments = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M6 4V14M6 18V20M12 4V6M12 10V20M18 4V14M18 18V20" />
      <circle cx="6" cy="16" r="2"></circle>
      <circle cx="12" cy="8" r="2"></circle>
      <circle cx="18" cy="16" r="2"></circle>
    </svg>
  )
}

export default Adjustments
