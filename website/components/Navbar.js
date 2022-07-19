const Navbar = () => {
  return (
    <div className="h-[85px] w-full px-[10px] md:px-[20px] lg:px-[30px]">
      <div className="mx-auto flex h-full w-full max-w-[1120px] items-center justify-between">
        <div className="flex items-center">
          <h1 className="mr-[10px] select-none text-[20px] font-[600]">eldicons</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lukeaelder/eldicons/releases"
            className="flex cursor-pointer select-none items-center rounded-[5px] border-[1px] border-indigo-600 px-[8px] py-[3px] text-[14px] font-[500] text-indigo-600 transition hover:bg-slate-100"
          >
            v1.0.0
          </a>
        </div>
        <div className="flex items-center gap-[20px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            href="https://github.com/lukeaelder/eldicons"
            className="cursor-pointer text-[16px] font-[500] tracking-wide text-neutral-900 transition duration-200 hover:text-indigo-600"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Figma"
            href="https://www.figma.com/community/file/1128522179717811995"
            className="group cursor-pointer"
          >
            <svg
              className="transiition stroke-neutral-900 duration-200 group-hover:stroke-indigo-600"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path fill="none" stroke="none" d="M0 0h24v24H0z" />
              <circle cx="15" cy="12" r="3" />
              <rect x="6" y="3" width="12" height="6" rx="3" />
              <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3V3" />
            </svg>
          </a>
          <a
            download
            href="https://github.com/lukeaelder/eldicons/releases/download/v1.0.0/eldicons-1.0.0.zip"
            aria-label="Download"
            className="cursor-pointer rounded-[5px] bg-indigo-500 p-[5px] font-[500] tracking-wide transition hover:bg-indigo-600"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-white"
            >
              <path fill="none" stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 16V17A3 3 0 0 0 7 20L17 20A3 3 0 0 0 20 17V16M12 4V16M8 12L12 16L16 12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
