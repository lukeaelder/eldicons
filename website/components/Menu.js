import { useEffect } from 'react';
import { useSharedState } from '../context/state';
import disableScroll from 'disable-scroll';
import MenuIcon from './MenuIcon';
import MenuInfo from './MenuInfo';
import MenuButtons from './MenuButtons';

const Menu = () => {
  const [state, setState] = useSharedState();

  useEffect(() => {
    if (state.menuSettings.open) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [state.menuSettings]);

  const closeMenu = () => {
    setState((prev) => ({
      ...prev,
      menuSettings: { ...state.menuSettings, open: false },
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 z-[20] flex h-full w-full items-center justify-center transition duration-200 ${
        state.menuSettings.open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className='absolute top-0 left-0 h-full w-full bg-black/25'
        onClick={() => closeMenu()}
      ></div>
      <div
        className={`w-[90vw] max-w-xl rounded-lg border-[1px] border-slate-300 bg-white shadow-lg transition duration-200 dark:border-slate-600 dark:bg-slate-800 will-change-transform ${
          state.menuSettings.open ? 'translate-y-0' : 'translate-y-[-20px]'
        }`}
      >
        <div className='flex gap-5 p-5'>
          <MenuIcon />
          <MenuInfo />
        </div>
        <div className='h-[1px] w-full bg-slate-300 dark:bg-slate-600'></div>
        <div>
          <MenuButtons />
        </div>
      </div>
    </div>
  );
};

export default Menu;
