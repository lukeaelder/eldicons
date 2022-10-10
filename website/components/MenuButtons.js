import { useSharedState } from '../context/state';
import fileDownload from 'js-file-download';
import { SVGPathData } from 'svg-pathdata';
import { useRouter } from 'next/router';
import disableScroll from 'disable-scroll';
import toast from 'react-hot-toast';

const MenuButtons = () => {
  const [state, setState] = useSharedState();
  const router = useRouter();

  const generateRes = (type) => {
    const res = '';
    if (type === 1) {
      res += `<svg xmlns='http://www.w3.org/2000/svg' width='${state.iconSettings.size}' height='${
        state.iconSettings.size
      }' viewBox='0 0 24 24' stroke-width='${state.iconSettings.stroke}' stroke='${
        state.iconSettings.color === '#000000' || state.iconSettings.color === '#ffffff'
          ? 'currentColor'
          : state.iconSettings.color
      }' fill='none' stroke-linecap='round' stroke-linejoin='round'>`;
    } else {
      res += `<svg xmlns='http://www.w3.org/2000/svg' width={${state.iconSettings.size}} height={${
        state.iconSettings.size
      }} viewBox='0 0 24 24' strokeWidth={${state.iconSettings.stroke}} stroke='${
        state.iconSettings.color === '#000000' || state.iconSettings.color === '#ffffff'
          ? 'currentColor'
          : state.iconSettings.color
      }' fill='none' strokeLinecap='round' strokeLinejoin='round'>`;
    }
    res += `<path fill='none' stroke='none' d='M0 0h24v24H0z'/><path d='${state.menuSettings.path}'/></svg>`;
    return res;
  };

  const handleCopy = (type) => {
    const res = generateRes(type);
    navigator.clipboard.writeText(res);
    toast(
      <div
        className={`
         flex h-full w-32 select-none items-center justify-center rounded-md bg-green-500 p-2 text-white`}
      >
        <span>Copied {type === 1 ? 'SVG' : 'JSX'}</span>
      </div>
    );
  };

  const handleDownload = () => {
    const res = generateRes(1);
    fileDownload(res, state.menuSettings.name + '.svg');
  };

  const handleEdit = () => {
    const dataRes = new SVGPathData(state.menuSettings.path);
    setState((p) => ({ ...p, create: { ...p.create, data: dataRes.commands } }));
    disableScroll.off();
    router.push('/create');
  };

  return (
    <div className='flex gap-2 px-5 py-3'>
      <div
        className='flex cursor-pointer items-center gap-1 rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600'
        onClick={() => handleCopy(1)}
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M15 5H17A2 2 0 0 1 19 7V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V7A2 2 0 0 1 7 5H9M11 7A2 2 0 0 1 11 3H13A2 2 0 0 1 13 7H11' />
        </svg>
        <p className='select-none'>SVG</p>
      </div>
      <div
        className='flex cursor-pointer items-center gap-1 rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600'
        onClick={() => handleCopy(2)}
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M15 5H17A2 2 0 0 1 19 7V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V7A2 2 0 0 1 7 5H9M11 7A2 2 0 0 1 11 3H13A2 2 0 0 1 13 7H11' />
        </svg>
        <p className='select-none'>JSX</p>
      </div>
      <div
        className='ml-auto flex cursor-pointer items-center gap-1 rounded-md border-[1px] border-slate-300 px-3 py-2 text-sm font-medium text-black shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:text-white dark:hover:border-indigo-500'
        onClick={() => handleDownload()}
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M4 16V17A3 3 0 0 0 7 20L17 20A3 3 0 0 0 20 17V16M12 4V16M8 12L12 16L16 12' />
        </svg>
        <p className='select-none'>SVG</p>
      </div>
      <div
        className='cursor-pointer items-center gap-1 rounded-md border-[1px] border-slate-300 px-2 py-1 text-sm font-medium text-black shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:text-white dark:hover:border-indigo-500 flex md:px-3 md:py-2'
        onClick={() => handleEdit()}
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M4 20V16L14.5 5.5A1.5 1.5 0 0 1 18.5 9.5L8 20H4M13.5 6.5L17.5 10.5' />
        </svg>
        <p className='select-none hidden sm:block'>EDIT</p>
      </div>
    </div>
  );
};

export default MenuButtons;
