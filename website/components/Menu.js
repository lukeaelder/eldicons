import { useEffect } from 'react'
import { useSharedState } from '../context/state'
import disableScroll from 'disable-scroll'
import svgData from '../context/svgData.json'
import MenuIcon from './MenuIcon'
import MenuInfo from './MenuInfo'
import fileDownload from 'js-file-download'
import { toast } from 'react-toastify'

const Menu = () => {
  const [state, setState] = useSharedState()
  const { menuSettings, iconSettings } = state

  useEffect(() => {
    if (menuSettings.open) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [menuSettings])

  const generateRes = (type) => {
    let res = ''
    res += svgData[type] + svgData.sizeBox
    res +=
      svgData[menuSettings.name][type] === null
        ? svgData[menuSettings.name]['svg']
        : svgData[menuSettings.name][type]
    res += '</svg>'
    res = res.replace(/%s%/g, iconSettings.size).replace(/%sw%/g, iconSettings.stroke)
    if (iconSettings.color === '#000' || iconSettings.color === '#000000') {
      res = res.replace(/%c%/g, 'currentColor')
    } else {
      res = res.replace(/%c%/g, iconSettings.color)
    }
    return res
  }

  const closeMenu = () => {
    setState((prev) => ({
      ...prev,
      menuSettings: { ...state.menuSettings, open: false },
    }))
  }

  const handleCopy = (type) => {
    const res = generateRes(type)
    toast.dismiss()
    toast.clearWaitingQueue()
    toast(`📋 copied ${menuSettings.name} as ${type.toUpperCase()}`)
    navigator.clipboard.writeText(res)
  }

  const handleDownload = () => {
    const res = generateRes('svg')
    fileDownload(res, menuSettings.name + '.svg')
  }

  return (
    <div
      className={`fixed top-0 left-0 z-[20] flex h-full w-full items-center justify-center transition duration-200 ${
        menuSettings.open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-slate-900 bg-opacity-20"
        onClick={() => closeMenu()}
      ></div>
      <div
        className={`absolute w-[90vw] max-w-[550px] rounded-[10px] bg-white shadow-md transition duration-200 ${
          menuSettings.open ? 'translate-y-0' : 'translate-y-[-20px]'
        }`}
      >
        <div className="flex gap-[20px] p-[20px]">
          <MenuIcon menuSettings={menuSettings} />
          <MenuInfo menuSettings={menuSettings} closeMenu={closeMenu} />
        </div>
        <div className="flex w-full items-center justify-between border-t-[1px] border-slate-300 p-[20px] text-[14px] font-[500]">
          <div className="flex gap-[10px] text-white">
            <div
              onClick={() => handleCopy('svg')}
              className="flex h-[35px] cursor-pointer items-center rounded-[5px] bg-indigo-500 px-[15px] transition hover:bg-indigo-600"
            >
              <p>Copy SVG</p>
            </div>
            <div
              onClick={() => handleCopy('jsx')}
              className="flex h-[35px] cursor-pointer items-center rounded-[5px] bg-indigo-500 px-[15px] transition hover:bg-indigo-600"
            >
              <p>Copy JSX</p>
            </div>
          </div>
          <div className="flex gap-[10px] text-slate-700">
            <div
              onClick={() => handleDownload()}
              className="group flex h-[35px] cursor-pointer items-center gap-[4px] rounded-[5px] border-[1px] border-slate-300 px-[15px] transition hover:border-slate-400 hover:text-slate-900"
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
                className="stroke-slate-700 group-hover:stroke-slate-900"
              >
                <path fill="none" stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 8V16M8 12L12 16L16 12" />
                <circle cx={12} cy={12} r={9}></circle>
              </svg>
              <p>SVG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
