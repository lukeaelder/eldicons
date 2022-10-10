import { useSharedState } from "../../context/state";

const Coordinates = () => {
  const [state, setState] = useSharedState();

  return (
    <>
      <span
        className={`pointer-events-none absolute z-30 -translate-x-1/2 translate-y-5 select-none whitespace-nowrap rounded bg-white/30 text-black transition duration-500 dark:bg-slate-900/30 dark:text-white ${
          state.create.user.y > 20 ? '-translate-y-[180%]' : ''
        } ${state.create.user.x < 4 ? 'translate-x-[30%]' : ''} ${
          state.create.user.x > 20 ? '-translate-x-[130%]' : ''
        }`}
        style={{ top: state.create.user.mouseY, left: state.create.user.mouseX }}
      >
        [{state.create.user.x} , {state.create.user.y}]
      </span>
    </>
  );
};

export default Coordinates;
