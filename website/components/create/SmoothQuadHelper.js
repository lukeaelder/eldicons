import { useSharedState } from '../../context/state';

const SmoothQuadHelper = ({ keyVal, x, y, x2, y2, x3, y3, hoverControls }) => {
  const [state, setState] = useSharedState();

  return (
    <path
      className={`stroke-slate-500/60 stroke-[.2] transition duration-75 dark:stroke-slate-500/70 ${
        state.create.settings.mode === 1 ? null : 'hidden'
      } ${
        state.create.hovering.has(`SQH${keyVal}-x1-y1`)
          ? '!block !stroke-red-500 dark:!stroke-red-500'
          : ''
      }`}
      id={`SQH${keyVal}-x1-y1`}
      d={`M${x} ${y}L${x2} ${y2}L${x3} ${y3}`}
      strokeDasharray='0.5'
      onMouseEnter={() => {
        setState((p) => ({
          ...p,
          create: {
            ...p.create,
            hovering: p.create.selected[0] === null ? new Set(hoverControls) : p.create.hovering,
          },
        }));
      }}
      onMouseLeave={() => {
        setState((p) => ({
          ...p,
          create: {
            ...p.create,
            hovering: p.create.selected[0] === null ? new Set() : p.create.hovering,
          },
        }));
      }}
    />
  );
};

export default SmoothQuadHelper;
