import Link from 'next/link';

const NavItem = ({ link = null, name = null, svg = null }) => {
  return (
    <Link href={link}>
      <a>
        <div className='dark:hover:font-white flex cursor-pointer gap-2 stroke-slate-600 p-2 text-slate-600 transition hover:stroke-black hover:text-black dark:stroke-slate-400 dark:text-slate-400 dark:hover:stroke-white dark:hover:text-white sm:p-3 lg:p-4'>
          <svg
            viewBox='0 0 24 24'
            strokeWidth={2}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-6 w-6'
          >
            <path fill='none' stroke='none' d='M0 0h24v24H0z' />
            <path d={svg} />
          </svg>
          <p className='hidden lg:block'>{name}</p>
        </div>
      </a>
    </Link>
  );
};

export default NavItem;
