const Button = ({ children }) => {
  return (
    <div className='relative w-fit flex items-center p-2 justify-center rounded-md border-[1px] border-slate-300 shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none transition hover:border-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-600 dark:hover:border-indigo-500 cursor-pointer'>
      {children}
    </div>
  );
};

export default Button;
