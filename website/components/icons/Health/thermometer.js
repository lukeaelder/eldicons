import * as React from 'react';

      const Thermometer = ({size = 24, color = "currentColor", stroke = 2}) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' strokeWidth={stroke} stroke={color} fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path fill="none" stroke="none" d="M0 0h24v24H0z"/>
            <path d="M4 20L7 17V13L15 5A2 2 0 0 1 19 9L11 17H7M11 14L12.5 15.5M14 11L15.5 12.5M17 8L18.5 9.5" />
        </svg>
    );
}


        
export default Thermometer;