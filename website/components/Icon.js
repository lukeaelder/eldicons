import { useSharedState } from '../context/state'

const Icon = ({ data }) => {
  const [state, setState] = useSharedState()

  const handleClick = () => {
    setState((prev) => ({
      ...prev,
      menuSettings: {
        name: data.name,
        svg: data.svg,
        tags: data.tags,
        open: true,
      },
    }))
  }

  return (
    <div
      onClick={() => handleClick()}
      className="group relative mb-[5px] flex h-[150px] w-full cursor-pointer items-center justify-center rounded border-[1px] border-slate-200 bg-white pb-[15px] transition hover:border-indigo-500"
    >
      <data.svg
        size={state.iconSettings.size}
        stroke={state.iconSettings.stroke}
        color={state.iconSettings.color}
      />
      <p className="absolute bottom-[15px] w-full truncate px-[15px] text-center text-[13px] font-[400] text-neutral-500 transition group-hover:text-neutral-600">
        {data.name}
      </p>
    </div>
  )
}

export default Icon
