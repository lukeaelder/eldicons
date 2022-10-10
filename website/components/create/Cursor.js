import { useSharedState } from '../../context/state';

const Cursor = () => {
  const [state, setState] = useSharedState();

  return (
    <path
    className={`stroke-[0.7] pointer-events-none transition duration-75 ${state.create.settings.mode === 0 ? 'stroke-red-500' : 'stroke-red-500/70'}`}
      d={`M${state.create.user.x} ${state.create.user.y}L${state.create.user.x + 0.01} ${state.create.user.y}`}
    />
  );
};

export default Cursor;
