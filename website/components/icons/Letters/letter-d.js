import * as React from 'react';

      const LetterD = ({size = 24, color = "currentColor", stroke = 2}) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' strokeWidth={stroke} stroke={color} fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path fill="none" stroke="none" d="M0 0h24v24H0z"/>
            <path d='M17 10A6 6 0 0 0 11 4H7V20H11A6 6 0 0 0 17 14Z'/>
        </svg>
    );
}


        
export default LetterD;