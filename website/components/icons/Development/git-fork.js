import * as React from 'react'

const GitFork = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M7 8V10A2 2 0 0 0 9 12H15A2 2 0 0 0 17 10V8M12 12V16" />
      <circle cx="7" cy="6" r="2"></circle>
      <circle cx="12" cy="18" r="2"></circle>
      <circle cx="17" cy="6" r="2"></circle>
    </svg>
  )
}

export default GitFork
