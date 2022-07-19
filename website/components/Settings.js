import { useSharedState } from '../context/state'
import { HexColorPicker } from 'react-colorful'
import { useState, useEffect } from 'react'

const Settings = () => {
  const [state, setState] = useSharedState()
  const { iconSettings } = state
  const [color, setColor] = useState('#000')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      iconSettings: { ...state.iconSettings, color: color },
    }))
  }, [color])

  return (
    <div className="flex h-[50px] w-full items-center justify-center gap-[20px] text-[15px] md:gap-[30px] lg:gap-[40px]">
      <div className="flex w-full items-center">
        <label htmlFor="input-size" className="select-none text-slate-500">
          Size:
        </label>
        <input
          id="input-size"
          step={4}
          min={12}
          max={100}
          value={iconSettings.size}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...prev.iconSettings,
                size: e.target.value,
              },
            }))
          }
          type="range"
          className="mx-[15px] w-full py-[5px]"
        />
        <span className="w-[60px] select-none text-slate-700">{iconSettings.size}px</span>
      </div>
      <div className="flex items-center md:w-3/4">
        <label htmlFor="input-stroke" className="select-none text-slate-500">
          Stroke:
        </label>
        <input
          id="input-stroke"
          step={0.25}
          min={1}
          max={3}
          value={iconSettings.stroke}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...state.iconSettings,
                stroke: e.target.value,
              },
            }))
          }
          type="range"
          className="mx-[15px] hidden w-full py-[5px] md:block"
        />
        <span className="hidden w-[60px] select-none text-slate-700 md:block">
          {iconSettings.stroke}
        </span>
        <select
          className="block cursor-pointer bg-transparent pl-[5px] text-slate-700 focus:outline-none md:hidden"
          value={iconSettings.stroke}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              iconSettings: {
                ...state.iconSettings,
                stroke: e.target.value,
              },
            }))
          }
        >
          <option value={1}>1</option>
          <option value={1.25}>1.25</option>
          <option value={1.5}>1.5</option>
          <option value={1.75}>1.75</option>
          <option value={2}>2</option>
          <option value={2.25}>2.25</option>
          <option value={2.5}>2.5</option>
          <option value={2.75}>2.75</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className="flex items-center gap-[10px]">
        <span className="text-slate-500">Color:</span>
        <div className="relative cursor-pointer">
          <div
            className="h-[25px] w-[60px] rounded-[5px] border-[1px] border-slate-300 p-[4px]"
            onClick={() => setOpen(!open)}
            style={{ background: color }}
          ></div>
          <div
            className={`absolute top-[30px] right-0 transition ${
              open
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-[-5px] opacity-0'
            }`}
          >
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
