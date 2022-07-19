import * as React from 'react'

const Microphone = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M5 11A7 7 0 0 0 19 11M12 18V22M8 22H16M9 11V5A3 3 0 0 1 15 5V11A3 3 0 0 1 9 11" />
    </svg>
  )
}

export default Microphone
