const MenuInfo = ({ menuSettings, closeMenu }) => {
  return (
    <div className="relative w-full">
      <h2 className="mb-[5px] text-[24px] font-[500] tracking-wide">{menuSettings.name}</h2>
      <div className="flex flex-wrap gap-[5px]">
        {menuSettings.tags.map((e, i) => {
          return (
            <p
              className="rounded bg-slate-900 bg-opacity-[5%] px-[6px] py-[1px] text-[13px] font-[400] tracking-wide text-slate-600"
              key={i}
            >
              {e}
            </p>
          )
        })}
      </div>
      <div
        className="group absolute top-[-5px] right-[-5px] cursor-pointer p-[5px]"
        onClick={() => closeMenu()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-slate-500 transition group-hover:stroke-slate-700"
        >
          <path fill="none" stroke="none" d="M0 0h24v24H0z" />
          <path d="M6 6L18 18M6 18L18 6" />
        </svg>
      </div>
    </div>
  )
}

export default MenuInfo
