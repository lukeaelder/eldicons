import { useSharedState } from '../context/state';
import Link from 'next/link';

const Header = () => {
  const [state, setState] = useSharedState();

  return (
    <div className='mx-auto max-w-7xl py-16 sm:py-20 lg:py-24'>
      <h1 className='text-center text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-[3.375rem] lg:text-6xl'>
        {state.icons.length} SVG Icons
      </h1>
      <p className='mx-auto mt-6 max-w-3xl px-6 text-center text-lg text-slate-600 dark:text-slate-400'>
        Each icon is designed on a 24x24 grid for simplicity, consitency, and readability on your
        website or app.
      </p>
      <div className='mt-6 flex justify-center gap-6'>
        <Link href='/create'>
          <a className='flex h-[3.75rem] w-32 cursor-pointer items-center justify-center rounded-lg bg-indigo-500 font-semibold text-white shadow-md transition hover:bg-indigo-600 hover:shadow-lg md:w-36 lg:w-40'>
            Create
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
