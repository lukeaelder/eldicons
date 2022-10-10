import { useSharedState } from '../context/state';

const Icon = ({ data }) => {
  const [state, setState] = useSharedState();

  const handleClick = () => {
    setState((prev) => ({
      ...prev,
      menuSettings: {
        name: data.name,
        svg: data.svg,
        tags: data.tags,
        path: data.path,
        open: true,
      },
    }));
  };

  return (
    <div
      className='group relative flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-[1px] border-slate-300 bg-white shadow-[0_0_0_0px] shadow-indigo-500/0 transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:bg-slate-800 dark:hover:border-indigo-500'
      onClick={handleClick}
    >
      <svg
        width={state.iconSettings.size}
        height={state.iconSettings.size}
        viewBox='0 0 24 24'
        strokeWidth={state.iconSettings.stroke}
        stroke={state.iconSettings.color}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='absolute -translate-y-3'
      >
        <path fill='none' stroke='none' d='M0 0h24v24H0z' />
        <path d={data.path} />
      </svg>
      <span className='absolute bottom-2 w-full truncate px-[.875rem] text-center text-[13px] font-[400] tracking-wide text-slate-500 transition group-hover:text-black dark:text-slate-400 dark:group-hover:text-white'>
        {data.name}
      </span>
      {data.version === '1.2.0' ? (
        <div className='absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500'></div>
      ) : null}
    </div>
  );
};

export default Icon;
