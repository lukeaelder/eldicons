import Link from 'next/link';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className='h-[4.5rem] w-full border-b-[1px] border-slate-300/90 px-[clamp(16px,3vw,32px)] font-Poppins text-black dark:border-slate-300/20 dark:bg-slate-900 dark:text-white'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between'>
        <div className='flex items-center gap-4 text-xl font-semibold tracking-[1px]'>
          <Link href='/'>
            <a>
              <p className='select-none'>eldicons</p>
            </a>
          </Link>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/lukeaelder/eldicons/releases'
            className='rounded-md border-[1px] border-indigo-500 px-2 py-[.1875rem] text-sm font-normal text-indigo-600 shadow-[0_0_0_0px] shadow-indigo-500/0 transition hover:border-indigo-600 hover:text-indigo-700 hover:shadow-[0_0_0_3px] hover:shadow-indigo-500/30 dark:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400'
          >
            v1.2.1
          </a>{' '}
        </div>
        <div className='flex'>
          <NavItem
            name='GitHub'
            link='https://github.com/lukeaelder/eldicons'
            svg='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'
          />
          <NavItem
            name='Figma'
            link='https://www.figma.com/community/file/1128522179717811995'
            svg='M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15M9 3H15A3 3 0 0 1 15 9H9A3 3 0 0 1 9 3M15 9A3 3 0 0 1 15 15A3 3 0 0 1 15 9'
          />
          <NavItem
            name='Download'
            link='https://github.com/lukeaelder/eldicons/releases/download/v1.2.0/eldicons-1.2.0.zip'
            svg='M4 16V17A3 3 0 0 0 7 20L17 20A3 3 0 0 0 20 17V16M12 4V16M8 12L12 16L16 12'
          />
          <div className='mx-2 my-auto h-8 w-[1px] bg-slate-300/90 dark:bg-slate-300/20 lg:mx-3'></div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

