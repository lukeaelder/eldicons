import * as React from 'react'

const Calculator2 = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M5 19V5A2 2 0 0 1 7 3H17A2 2 0 0 1 19 5V19A2 2 0 0 1 17 21H7A 2 2 0 0 1 5 19M9 7H15M9 11V11.01M12 11V11.01M15 11V11.01M9 14V14.01M12 14V14.01M15 14V14.01M9 17H12M15 17V17.01" />
    </svg>
  )
}

export default Calculator2
