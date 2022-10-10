import { useSharedState } from '../context/state';

const MenuIcon = () => {
  const [state, setState] = useSharedState();

  return (
    <div className='relative h-min w-fit rounded-md border-[1px] border-slate-300 p-1 shadow-sm dark:border-slate-600'>
      <div className='h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36'>
        {state.menuSettings.path === null ? (
          ''
        ) : (
          <div className='absolute'>
            <svg
              viewBox='0 0 24 24'
              strokeWidth={state.iconSettings.stroke}
              stroke={state.iconSettings.color}
              className='h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path fill='none' stroke='none' d='M0 0h24v24H0z' />
              <path d={state.menuSettings.path} />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuIcon;
