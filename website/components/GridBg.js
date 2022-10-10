const GridBg = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      strokeWidth={0.06}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='pointer-events-none absolute w-[full]'
    >
      <path fill='none' stroke='none' d='M0 0h24v24H0z' />
      <path
        className='stroke-slate-200 dark:stroke-slate-600'
        d='M1 0V24M3 0V24M5 0V24M7 0V24M9 0V24M11 0V24M13 0V24M15 0V24M17 0V24M19 0V24M21 0V24M23 0V24M0 1H24M0 3H24M0 5H24M0 7H24M0 9H24M0 11H24M0 13H24M0 15H24M0 17H24M0 19H24M0 21H24M0 23H24'
      />
      <path
        className='stroke-slate-300 dark:stroke-slate-500'
        d='M2 0V24M4 0V24M6 0V24M8 0V24M10 0V24M12 0V24M14 0V24M16 0V24M18 0V24M20 0V24M22 0V24M0 2H24M0 4H24M0 6H24M0 8H24M0 10H24M0 12H24M0 14H24M0 16H24M0 18H24M0 20H24M0 22H24'
      />
    </svg>
  );
};

export default GridBg;
