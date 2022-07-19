import * as React from 'react'

const UserX = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21M9 3A4 4 0 0 1 9 11A4 4 0 0 1 9 3M17 9L21 13M17 13L21 9" />
    </svg>
  )
}

export default UserX
