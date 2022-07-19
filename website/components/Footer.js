const Footer = () => {
  return (
    <footer className="absolute bottom-0 mt-[50px] flex h-[100px] w-full items-center justify-center border-t-[1px] border-slate-200 text-[14px] tracking-wide">
      <p className="text-neutral-500">
        Made by{' '}
        <a
          href="https://github.com/lukeaelder"
          target="_blank"
          className="cursor-pointer font-[600] text-neutral-800 transition hover:text-indigo-600"
        >
          @lukeaelder
        </a>
      </p>
    </footer>
  )
}

export default Footer
