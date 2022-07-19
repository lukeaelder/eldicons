import * as React from 'react'

const LockLocked = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 13A2 2 0 0 1 6 11H18A2 2 0 0 1 20 13V19A2 2 0 0 1 18 21H6A2 2 0 0 1 4 19V13M12 15V17M8 11V7A4 4 0 0 1 16 7V11" />
    </svg>
  )
}

export default LockLocked
