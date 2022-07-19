import * as React from 'react'

const PinUser = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M12 7A2 2 0 0 1 12 11A2 2 0 0 1 12 7M17.657 16.657L13.414 20.9A2 2 0 0 1 10.587 20.9L6.343 16.657A8 8 0 1 1 17.657 16.657ZM7.25 17.564A4.9 4.9 0 0 1 16.75 17.654" />
    </svg>
  )
}

export default PinUser
