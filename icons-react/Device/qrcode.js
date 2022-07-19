import * as React from 'react'

const Qrcode = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M16 20H20M18 16H20M20 12H20.01M4 12H8M12 4V5M12 9V12H16M12 20V16H14M4 7V5A1 1 0 0 1 5 4H7A1 1 0 0 1 8 5V7A1 1 0 0 1 7 8H5A1 1 0 0 1 4 7M16 7V5A1 1 0 0 1 17 4H19A1 1 0 0 1 20 5V7A1 1 0 0 1 19 8H17A1 1 0 0 1 16 7 M4 19V17A1 1 0 0 1 5 16H7A1 1 0 0 1 8 17V19A1 1 0 0 1 7 20H5A1 1 0 0 1 4 19" />
    </svg>
  )
}

export default Qrcode
