const Footer = () => {
  return (
    <footer className='absolute bottom-0 h-20 justify-center flex w-full items-center border-t-[1px] border-slate-300/90 px-[clamp(16px,3vw,32px)] font-Poppins text-black dark:border-slate-300/20 dark:bg-slate-900 dark:text-white'>
      <p>
        Made by{' '}
        <a
          href='https://github.com/lukeaelder'
          target='_blank'
          className='cursor-pointer font-[600] duration-100 transition hover:text-indigo-600 tracking-wide'
        >
          @lukeaelder
        </a>
      </p>
    </footer>
  );
};

export default Footer;
