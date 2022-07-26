import * as React from 'react';

const PhoneX = ({ size = 24, color = 'currentColor', stroke = 2 }) => {
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
      <path d="M3 5A2 2 0 0 1 5 3H8.28A1 1 0 0 1 9.228 3.684L10.726 8.174A1 1 0 0 1 10.224 9.384L7.967 10.514A11.042 11.042 0 0 0 13.483 16.03L14.613 13.773A1 1 0 0 1 15.734 13.268L20.227 14.766A1 1 0 0 1 20.911 15.715V19A2 2 0 0 1 18.911 21H17.911C9.716 21 3 14.284 3 6V5ZM16 4L20 8M16 8L20 4" />
    </svg>
  );
};

export default PhoneX;
