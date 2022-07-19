import * as React from 'react'

const Meteor = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M4 13A8 8 0 0 0 20 13V2.5L13 5.75V3.25L8 6A8 8 0 0 0 4 13" />
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  )
}

export default Meteor
