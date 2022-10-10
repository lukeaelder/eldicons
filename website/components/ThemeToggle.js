import { useEffect } from 'react';
import { useSharedState } from '../context/state';

const ThemeToggle = () => {
  const [state, setState] = useSharedState();

  useEffect(() => {
    if (localStorage.theme === 'dark') {
        setState((prev) => ({...prev, theme:'dark'}))
    }
    if (localStorage.theme === 'light') {
      setState((prev) => ({ ...prev, theme: 'light' }));
    }
  }, [])

  useEffect(() => {
    if (
      state.theme === 'dark' ||
      (state.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      if (state.iconSettings.color === '#000000' || state.iconSettings.color === '#000') {
        setState((prev) => ({
          ...prev,
          iconSettings: { ...state.iconSettings, color: '#ffffff' },
        }));
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (state.iconSettings.color === '#ffffff' || state.iconSettings.color === '#fff') {
        setState((prev) => ({
          ...prev,
          iconSettings: { ...state.iconSettings, color: '#000000' },
        }));
      }
    }
  }, [state.theme]);

  const updateTheme = (e) => {
    localStorage.theme = e.target.value
    setState((prev) => ({ ...prev, theme: e.target.value }))
  }

  return (
    <div className='relative stroke-slate-600 p-2 transition hover:stroke-black dark:stroke-slate-400 dark:hover:stroke-white sm:p-3 lg:p-4'>
      <svg
        viewBox='0 0 24 24'
        strokeWidth={2}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-6 w-6'
      >
        <path fill='none' stroke='none' d='M0 0h24v24H0z' />
        <path
          className='hidden dark:block'
          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646'
        />
        <path
          className='block dark:hidden'
          d='M3 12H4M12 3V4M21 12H20M12 21V20M5.63 5.63L6.343 6.343M18.364 18.364L17.65 17.65M18.364 5.6L17.65 6.343M5.6 18.364L6.343 17.65'
        />
        <circle className='block dark:hidden' cx={12} cy={12} r={4}></circle>
      </svg>
      <select
        className='absolute top-0 left-0 h-full w-full cursor-pointer appearance-none opacity-0'
        value={state.theme}
        onChange={(e) => updateTheme(e)}
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='system'>System</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
