import * as React from 'react'

const Sun = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 12H4M12 3V4M21 12H20M12 21V20M5.63 5.63L6.343 6.343M18.364 18.364L17.65 17.65M18.364 5.6L17.65 6.343M5.6 18.364L6.343 17.65" />
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <circle cx={12} cy={12} r={4}></circle>
    </svg>
  )
}

export default Sun
