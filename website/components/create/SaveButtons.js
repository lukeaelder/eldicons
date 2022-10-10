import fileDownload from 'js-file-download';
import { encodeSVGPath } from 'svg-pathdata';
import { useSharedState } from '../../context/state';
import toast from 'react-hot-toast';

const SaveButtons = () => {
  const [state, setState] = useSharedState();

  const notify = (e) => {
    toast(
      <div
        className={`
         flex h-full w-32 select-none items-center justify-center rounded-md bg-green-500 p-2 text-white`}
      >
        <span>Copied {e}</span>
      </div>
    );
  };

  const notifyError = (e) => {
    toast(
      <div
        className={`
         flex h-full w-40 select-none items-center justify-center rounded-md bg-rose-500 p-2 text-white`}
      >
        <span>No data for {e}</span>
      </div>
    );
  };

  const handleDownload = () => {
    
    if (state.create.data.length) {
      const res = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path fill='none' stroke='none' d='M0 0h24v24H0z'/><path d='${encodeSVGPath(
        state.create.data
      )}'/></svg>`;
      fileDownload(res, 'icon.svg');
    } else {
      notifyError('SVG');
    }
  };

  const handleCopySvg = () => {
    if (state.create.data.length) {
      navigator.clipboard.writeText(
        `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path fill='none' stroke='none' d='M0 0h24v24H0z'/><path d='${encodeSVGPath(
          state.create.data
        )}'/></svg>`
      );
      notify('SVG');
    } else {
      notifyError('SVG');
    }
  };

  const handleCopyJsx = () => {
    if (state.create.data.length) {
      navigator.clipboard.writeText(
        `<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' stroke-width={2} stroke='#000000' fill='none' stroke-linecap='round' stroke-linejoin='round'><path fill='none' stroke='none' d='M0 0h24v24H0z'/><path d='${encodeSVGPath(
          state.create.data
        )}'/></svg>`
      );
      notify('JSX');
    } else {
      notifyError('JSX');
    }
  };

  const handleCopyUrl = () => {
    if (state.create.data.length) {
      navigator.clipboard.writeText(
        `https://eldicons.com/create?path=${encodeSVGPath(state.create.data).replaceAll(' ', '_')}`
      );
      notify('URL');
    } else {
      notifyError('URL');
    }
  };

  return (
    <div className='mt-3 flex w-full gap-2'>
      <div
        className='flex cursor-pointer items-center gap-1 rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600'
        onClick={() => handleCopySvg()}
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
        onClick={() => handleCopyJsx()}
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
        className='flex cursor-pointer items-center gap-1 rounded-md border-[1px] border-slate-300 px-2 py-1 text-sm font-medium text-black shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:text-white dark:hover:border-indigo-500 md:px-3 md:py-2'
        onClick={() => handleCopyUrl()}
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
          <path d='M13 5L14 4A4.2 4.2 0 0 1 20 10L16 14A4.2 4.2 0 0 1 10 14M11 19L10 20A4.2 4.2 0 0 1 4 14L8 10A4.2 4.2 0 0 1 14 10' />
        </svg>
        <p className='hidden select-none sm:block'>URL</p>
      </div>
    </div>
  );
};

export default SaveButtons;
