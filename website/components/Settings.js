import { useSharedState } from '../context/state';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useState } from 'react';

const Settings = () => {
  const [state, setState] = useSharedState();
  const [colorOpen, setColorOpen] = useState(false);

  const changeColor = (e) => {
    setState((prev) => ({
      ...prev,
      iconSettings: { ...prev.iconSettings, color: e },
    }));
  }

  return (
    <div className=' z-20 my-[.375rem] flex max-w-full flex-wrap justify-center gap-[.375rem] text-sm md:w-full md:flex-nowrap'>
      <div className='relative flex items-center gap-3 rounded border-[1px] border-slate-200 py-1 px-2 shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:hover:border-indigo-500 md:w-full md:hover:border-inherit md:hover:shadow-[0_0_0_0px] md:dark:hover:border-slate-600'>
        <p className='text-slate-500 dark:text-slate-300'>Size:</p>
        <input
          type='range'
          className='hidden w-full md:block'
          step={4}
          min={12}
          max={100}
          value={state.iconSettings.size}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...prev.iconSettings,
                size: e.target.value,
              },
            }))
          }
        ></input>
        <p className='text-center md:min-w-[2.375rem] md:max-w-[2.375rem]'>
          {state.iconSettings.size}px
        </p>
        <select
          value={state.iconSettings.size}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...prev.iconSettings,
                size: e.target.value,
              },
            }))
          }
          className='absolute top-0 left-0 h-full w-full cursor-pointer appearance-none bg-transparent text-transparent outline-none md:pointer-events-none md:hidden'
        >
          <option value={12}>12px</option>
          <option value={16}>16px</option>
          <option value={20}>20px</option>
          <option value={24}>24px</option>
          <option value={28}>28px</option>
          <option value={32}>32px</option>
          <option value={36}>36px</option>
          <option value={40}>40px</option>
          <option value={44}>44px</option>
          <option value={48}>48px</option>
          <option value={52}>52px</option>
          <option value={56}>56px</option>
          <option value={60}>60px</option>
          <option value={64}>64px</option>
          <option value={68}>68px</option>
          <option value={72}>72px</option>
          <option value={76}>76px</option>
          <option value={80}>80px</option>
          <option value={84}>84px</option>
          <option value={88}>88px</option>
          <option value={92}>92px</option>
          <option value={96}>96px</option>
          <option value={100}>100px</option>
        </select>
      </div>
      <div className='relative flex items-center gap-3 rounded border-[1px] border-slate-200 py-1 px-2 shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:hover:border-indigo-500 lg:w-3/4 lg:hover:border-inherit lg:hover:shadow-[0_0_0_0px] lg:dark:hover:border-slate-600'>
        <p className='text-slate-500 dark:text-slate-300'>Stroke:</p>
        <input
          type='range'
          className='hidden w-full lg:block'
          step={0.25}
          min={1}
          max={3}
          value={state.iconSettings.stroke}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...prev.iconSettings,
                stroke: e.target.value,
              },
            }))
          }
        ></input>
        <p className='text-center lg:min-w-[2rem] lg:max-w-[2rem]'>{state.iconSettings.stroke}</p>
        <select
          value={state.iconSettings.stroke}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...prev.iconSettings,
                stroke: e.target.value,
              },
            }))
          }
          className='absolute top-0 left-0 h-full w-full cursor-pointer appearance-none bg-transparent text-transparent outline-none lg:pointer-events-none lg:hidden'
        >
          <option value={1}>1</option>
          <option value={1.25}>1.25</option>
          <option value={1.5}>1.5</option>
          <option value={1.75}>1.75</option>
          <option value={2}>2</option>
          <option value={2.25}>2.25</option>
          <option value={2.5}>2.5</option>
          <option value={2.75}>2.75</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className='relative hidden cursor-pointer items-center rounded border-[1px] border-slate-200 py-1 px-2 shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:hover:border-indigo-500 md:flex'>
        <div
          className='absolute top-0 left-0 h-full w-full'
          onClick={() => setColorOpen(!colorOpen)}
        ></div>
        <p className='text-slate-500 dark:text-slate-300'>Color:&nbsp;</p>
        <div
          className='h-[1.125rem] w-8 rounded'
          style={{ background: state.iconSettings.color }}
        ></div>
        <div
          className={`absolute top-full -left-1/2 z-20 flex flex-col items-center shadow-lg transition ${
            colorOpen
              ? 'pointer-events-auto translate-y-2 opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        >
          <HexColorPicker color={state.iconSettings.color} onChange={(e) => changeColor(e)} />
          <HexColorInput
            color={state.iconSettings.color}
            onChange={(e) => changeColor(e)}
            className='absolute top-full w-full rounded-lg border-[1px] border-slate-400 py-1 text-center shadow-md outline-none dark:bg-slate-800'
          />
        </div>
      </div>
      <div className='relative flex cursor-pointer items-center rounded border-[1px] border-slate-200 py-1 px-2 shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:hover:border-indigo-500'>
        <p className='whitespace-nowrap text-slate-500 dark:text-slate-300'>
          Category:{' '}
          <span className='text-black dark:text-white'>{state.iconSettings.category}</span>
        </p>
        <select
          value={state.iconSettings.category}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...prev.iconSettings,
                category: e.target.value,
              },
            }))
          }
          className='absolute top-0 left-0 h-full w-full cursor-pointer appearance-none bg-transparent text-transparent outline-none'
        >
          <option value={'All'}>All</option>
          <option value={'Favorites'}>Favorites</option>
          <option value={'Arrows'}>Arrows</option>
          <option value={'Business'}>Business</option>
          <option value={'Charts'}>Charts</option>
          <option value={'Communication'}>Communication</option>
          <option value={'Database'}>Database</option>
          <option value={'Design'}>Design</option>
          <option value={'Development'}>Development</option>
          <option value={'Device'}>Device</option>
          <option value={'Document'}>Document</option>
          <option value={'Finance'}>Finance</option>
          <option value={'Food'}>Food</option>
          <option value={'Health'}>Health</option>
          <option value={'Letters'}>Letters</option>
          <option value={'Map'}>Map</option>
          <option value={'Media'}>Media</option>
          <option value={'Mood'}>Mood</option>
          <option value={'Numbers'}>Numbers</option>
          <option value={'Shapes'}>Shapes</option>
          <option value={'System'}>System</option>
          <option value={'Text'}>Text</option>
          <option value={'User'}>User</option>
          <option value={'Weather'}>Weather</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
