import { useEffect, useState } from 'react';
import { useSharedState } from '../context/state';

const MenuInfo = () => {
  const [state, setState] = useSharedState();
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    const storedData = localStorage.getItem('favs');
    const initialValue = storedData ? JSON.parse(storedData) : [];
    if (initialValue.includes(state.menuSettings.name)) {
      initialValue.splice(initialValue.indexOf(state.menuSettings.name), 1);
      localStorage.setItem('favs', JSON.stringify(initialValue));
      setFavorite(false);
    } else {
      initialValue.push(state.menuSettings.name);
      localStorage.setItem('favs', JSON.stringify(initialValue));
      setFavorite(true);
    }
    if (state.iconSettings.category === 'Favorites') {
      const dataRes = state.searchResults.filter((icon) => {
        return initialValue.includes(icon.name)
      })
      setState((p) => ({...p, searchResults: dataRes}))
    }
  };

  useEffect(() => {
    const curFavs = localStorage.getItem('favs');
    const initialValue = curFavs ? JSON.parse(curFavs) : [];
    if (initialValue.includes(state.menuSettings.name)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [state.menuSettings]);

  return (
    <div className='relative w-full'>
      <h2 className='mb-2 mr-16 w-fit cursor-pointer text-2xl font-medium tracking-wide text-black hover:underline dark:text-white'>
        {state.menuSettings.name}
      </h2>
      <div className='flex flex-wrap gap-1'>
        {state.menuSettings.tags.map((e, i) => {
          return (
            <p
              className='rounded bg-slate-100/90 px-2 py-[.125rem] text-[.8125rem] text-slate-600 dark:bg-slate-700 dark:text-slate-200'
              key={i}
            >
              {e}
            </p>
          );
        })}
      </div>
      <div className='absolute -top-[.0625rem] -right-[.0625rem] flex gap-1'>
        <div
          className='group relative flex h-[1.875rem] w-[1.875rem] animate-pulse cursor-pointer items-center justify-center p-1'
          onClick={() => toggleFavorite()}
        >
          <div className='absolute h-2 w-2 rounded-sm bg-slate-100 opacity-0 transition group-hover:scale-[4] group-hover:opacity-100 dark:bg-slate-700'></div>
          <svg
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={`absolute h-6 w-6 fill-transparent stroke-slate-600 transition origin-bottom group-hover:stroke-indigo-500 dark:stroke-slate-300 dark:group-hover:stroke-indigo-500 ${
              favorite
                ? 'animate-[favorite_.6s_ease] !fill-rose-500 !stroke-rose-500'
                : 'animate-[favoriteRemove_.5s_ease]'
            }`}
          >
            <path fill='none' stroke='none' d='M0 0h24v24H0z' />
            <path d='M4.5 12.572A5 5 0 1 1 12 6A5 5 0 1 1 19.5 12.572L12 20Z' />
          </svg>
        </div>
        <div
          className='group relative flex h-[1.875rem] w-[1.875rem] cursor-pointer items-center justify-center p-1'
          onClick={() =>
            setState((p) => ({ ...p, menuSettings: { ...p.menuSettings, open: false } }))
          }
        >
          <div className='absolute h-2 w-2 rounded-sm bg-slate-100 opacity-0 transition group-hover:scale-[4] group-hover:opacity-100 dark:bg-slate-700'></div>
          <svg
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='absolute h-6 w-6 stroke-slate-600 transition group-hover:stroke-indigo-500 dark:stroke-slate-300 dark:group-hover:stroke-indigo-500'
          >
            <path fill='none' stroke='none' d='M0 0h24v24H0z' />
            <path d='M6 6L18 18M6 18L18 6' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;
