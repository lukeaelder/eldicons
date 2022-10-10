import { useSharedState } from '../../context/state';
import TextTransition from 'react-text-transition';
import { useState, useRef, useEffect } from 'react';

const MODES = ['Line', 'Curve', 'Quad', 'Arc'];

const Menu = () => {
  const [state, setState] = useSharedState();

  const updateMode = (mode) => {
    if (mode === 0 && state.create.settings.mode === 0) {
      let type = state.create.settings.drawType + 1;
      if (type > 3) type = 0;
      setState((p) => ({
        ...p,
        create: { ...p.create, settings: { ...p.create.settings, drawType: type } },
      }));
    } else if (mode === 1 && state.create.settings.mode === 1) {
      setState((p) => ({
        ...p,
        create: {
          ...p.create,
          settings: {
            ...p.create.settings,
            selectMode: p.create.settings.selectMode === 0 ? 1 : 0,
          },
        },
      }));
    } else {
      setState((p) => ({
        ...p,
        create: { ...p.create, settings: { ...p.create.settings, mode: mode } },
      }));
    }
  };

  return (
    <div className='mb-3 flex w-full items-center justify-center gap-2'>
      <div
        className={`group flex cursor-pointer gap-1 rounded-lg border-[1px] p-2 shadow-[0_0_0_0px] shadow-indigo-500/0 transition hover:border-indigo-500 hover:stroke-indigo-500 hover:text-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:hover:border-indigo-500 dark:hover:stroke-indigo-500 dark:hover:text-indigo-500 ${
          state.create.settings.mode === 0
            ? 'border-black stroke-black text-black dark:border-white dark:stroke-white dark:text-white'
            : 'border-slate-500 stroke-slate-500 text-slate-500 dark:border-slate-400 dark:stroke-slate-400 dark:text-slate-400'
        }`}
        onClick={() => updateMode(0)}
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6 stroke-inherit'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M4 20V16L14.5 5.5A1.5 1.5 0 0 1 18.5 9.5L8 20H4M13.5 6.5L17.5 10.5' />
        </svg>
        <TextTransition
          springConfig={{
            tension: 180,
            friction: 12,
          }}
          className='select-none'
          inline={true}
        >
          {MODES[state.create.settings.drawType]}
        </TextTransition>
        <div className='ml-1 flex h-6 flex-col items-center justify-center gap-[.125rem]'>
          <div
            className={`h-[.1875rem] w-[.1875rem] rounded-full transition duration-75 
            ${
              state.create.settings.mode === 0
                ? state.create.settings.drawType === 0
                  ? 'bg-black group-hover:bg-indigo-500 dark:bg-white dark:group-hover:bg-indigo-500'
                  : 'bg-slate-400 group-hover:bg-indigo-300 dark:group-hover:bg-indigo-800'
                : state.create.settings.drawType === 0
                ? 'bg-slate-500 group-hover:bg-indigo-500 dark:bg-slate-400 dark:group-hover:bg-indigo-500'
                : 'bg-slate-300 group-hover:bg-indigo-300 dark:bg-slate-600 dark:group-hover:bg-indigo-800'
            } 
            `}
          ></div>
          <div
            className={`h-[.1875rem] w-[.1875rem] rounded-full transition duration-75 ${
              state.create.settings.mode === 0
                ? state.create.settings.drawType === 1
                  ? 'bg-black group-hover:bg-indigo-500 dark:bg-white dark:group-hover:bg-indigo-500'
                  : 'bg-slate-400 group-hover:bg-indigo-300 dark:group-hover:bg-indigo-800'
                : state.create.settings.drawType === 1
                ? 'bg-slate-500 group-hover:bg-indigo-500 dark:bg-slate-400 dark:group-hover:bg-indigo-500'
                : 'bg-slate-300 group-hover:bg-indigo-300 dark:bg-slate-600 dark:group-hover:bg-indigo-800'
            }`}
          ></div>
          <div
            className={`h-[.1875rem] w-[.1875rem] rounded-full transition duration-75 ${
              state.create.settings.mode === 0
                ? state.create.settings.drawType === 2
                  ? 'bg-black group-hover:bg-indigo-500 dark:bg-white dark:group-hover:bg-indigo-500'
                  : 'bg-slate-400 group-hover:bg-indigo-300 dark:group-hover:bg-indigo-800'
                : state.create.settings.drawType === 2
                ? 'bg-slate-500 group-hover:bg-indigo-500 dark:bg-slate-400 dark:group-hover:bg-indigo-500'
                : 'bg-slate-300 group-hover:bg-indigo-300 dark:bg-slate-600 dark:group-hover:bg-indigo-800'
            }`}
          ></div>
          <div
            className={`h-[.1875rem] w-[.1875rem] rounded-full transition duration-75 ${
              state.create.settings.mode === 0
                ? state.create.settings.drawType === 3
                  ? 'bg-black group-hover:bg-indigo-500 dark:bg-white dark:group-hover:bg-indigo-500'
                  : 'bg-slate-400 group-hover:bg-indigo-300 dark:group-hover:bg-indigo-800'
                : state.create.settings.drawType === 3
                ? 'bg-slate-500 group-hover:bg-indigo-500 dark:bg-slate-400 dark:group-hover:bg-indigo-500'
                : 'bg-slate-300 group-hover:bg-indigo-300 dark:bg-slate-600 dark:group-hover:bg-indigo-800'
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`group flex cursor-pointer gap-1 rounded-lg border-[1px] p-2 shadow-[0_0_0_0px] shadow-indigo-500/0 transition hover:border-indigo-500 hover:stroke-indigo-500 hover:text-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:hover:border-indigo-500 dark:hover:stroke-indigo-500 dark:hover:text-indigo-500 ${
          state.create.settings.mode === 1
            ? 'border-black stroke-black text-black dark:border-white dark:stroke-white dark:text-white'
            : 'border-slate-500 stroke-slate-500 text-slate-500 dark:border-slate-400 dark:stroke-slate-400 dark:text-slate-400'
        }`}
        onClick={() => updateMode(1)}
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`h-6 w-6 stroke-inherit transition-[fill] ${
            state.create.settings.selectMode === 1
              ? state.create.settings.mode === 1
                ? 'fill-black group-hover:fill-indigo-500 dark:fill-white'
                : 'fill-slate-500 group-hover:fill-indigo-500 dark:fill-slate-400'
              : 'fill-transparent'
          }`}
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M6 6l4.153 11.793a0.365 .365 0 0 0 .331 .207a0.366 .366 0 0 0 .332 -.207l2.184 -4.793l4.787 -1.994a0.355 .355 0 0 0 .213 -.323a0.355 .355 0 0 0 -.213 -.323l-11.787 -4.36M13.5 13.5l4.5 4.5' />
        </svg>
        <div className='ml-1 flex h-6 flex-col items-center justify-center gap-[.125rem]'>
          <div
            className={`h-[.1875rem] w-[.1875rem] rounded-full transition duration-75 ${
              state.create.settings.mode === 1
                ? state.create.settings.selectMode === 0
                  ? 'bg-black group-hover:bg-indigo-500 dark:bg-white dark:group-hover:bg-indigo-500'
                  : 'bg-slate-400 group-hover:bg-indigo-300 dark:group-hover:bg-indigo-800'
                : state.create.settings.selectMode === 0
                ? 'bg-slate-500 group-hover:bg-indigo-500 dark:bg-slate-400 dark:group-hover:bg-indigo-500'
                : 'bg-slate-300 group-hover:bg-indigo-300 dark:bg-slate-600 dark:group-hover:bg-indigo-800'
            }`}
          ></div>
          <div
            className={`h-[.1875rem] w-[.1875rem] rounded-full transition duration-75 ${
              state.create.settings.mode === 1
                ? state.create.settings.selectMode === 1
                  ? 'bg-black group-hover:bg-indigo-500 dark:bg-white dark:group-hover:bg-indigo-500'
                  : 'bg-slate-400 group-hover:bg-indigo-300 dark:group-hover:bg-indigo-800'
                : state.create.settings.selectMode === 1
                ? 'bg-slate-500 group-hover:bg-indigo-500 dark:bg-slate-400 dark:group-hover:bg-indigo-500'
                : 'bg-slate-300 group-hover:bg-indigo-300 dark:bg-slate-600 dark:group-hover:bg-indigo-800'
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`cursor-pointer rounded-lg border-[1px] p-2 shadow-[0_0_0_0px] shadow-indigo-500/0 transition hover:shadow-indigo-500/30  ${
          state.create.settings.mode === 2
            ? 'border-black stroke-black dark:border-white dark:stroke-white '
            : 'border-slate-500 stroke-slate-500 hover:border-indigo-500 hover:stroke-indigo-500 hover:shadow-[0_0_0_4px] dark:border-slate-400 dark:stroke-slate-400 dark:hover:border-indigo-500 dark:hover:stroke-indigo-500'
        }`}
        onClick={() =>
          setState((p) => ({
            ...p,
            create: { ...p.create, settings: { ...p.create.settings, mode: 2 } },
          }))
        }
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6 stroke-inherit'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M19 20H8.5L4.29 15.7A1 1 0 0 1 4.29 14.29L14.29 4.29A1 1 0 0 1 15.7 4.29L20.7 9.29A1 1 0 0 1 20.7 10.7L11.5 20M18 13.3L11.7 7' />
        </svg>
      </div>
      <div
        className={`relative cursor-pointer rounded-lg border-[1px] border-slate-500 p-2 text-slate-500 shadow-[0_0_0_0px] shadow-indigo-500/0 

            transition hover:border-indigo-500 hover:text-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-400 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:text-indigo-500
        `}
      >
        <p>
          Snap<span className='hidden sm:inline-block'>: {state.create.settings.snapAmount}</span>
        </p>
        <select
          className='absolute top-0 left-0 h-full w-full cursor-pointer appearance-none bg-transparent text-transparent outline-none'
          onChange={(e) =>
            setState((p) => ({
              ...p,
              create: {
                ...p.create,
                settings: { ...p.create.settings, snapAmount: e.target.value },
              },
            }))
          }
          value={state.create.settings.snapAmount}
        >
          <option value={0.001}>.001</option>
          <option value={0.002}>.002</option>
          <option value={0.003}>.003</option>
          <option value={0.004}>.004</option>
          <option value={0.005}>.005</option>
          <option value={0.006}>.006</option>
          <option value={0.008}>.008</option>
          <option value={0.01}>.01</option>
          <option value={0.02}>.02</option>
          <option value={0.03}>.03</option>
          <option value={0.04}>.04</option>
          <option value={0.05}>.05</option>
          <option value={0.06}>.06</option>
          <option value={0.08}>.08</option>
          <option value={0.1}>.1</option>
          <option value={0.2}>.2</option>
          <option value={0.3}>.3</option>
          <option value={0.4}>.4</option>
          <option value={0.5}>.5</option>
          <option value={0.6}>.6</option>
          <option value={0.8}>.8</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </select>
      </div>
    </div>
  );
};

export default Menu;
