import { useSharedState } from '../../context/state';
import { SVGPathData } from 'svg-pathdata';

const MoveHelper = ({ keyVal, x, y, x2, y2, hoverControls }) => {
  const [state, setState] = useSharedState();

  if (
    keyVal < state.create.data.length - 1 &&
    state.create.data[keyVal + 1].type !== SVGPathData.MOVE_TO
  ) {
    hoverControls.push(keyVal + 1);
  }

  return (
    <path
      className={`stroke-slate-500/60 stroke-[.2] transition duration-75 dark:stroke-slate-500/70 ${
        state.create.settings.mode !== 1
          ? 'hidden'
          : ''
      } ${
        state.create.settings.selectMode === 1 && state.create.settings.mode === 1 ? 'hidden' : ''
      }
      ${state.create.settings.mode === 1 ? '' : 'pointer-events-none'} ${
        state.create.hovering.has(`MH${keyVal}-x-y`)
          ? '!block !stroke-red-500 dark:!stroke-red-500'
          : ''
      }`}
      id={`MH${keyVal}-x-y`}
      d={`M${x} ${y}L${x2} ${y2}`}
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

export default MoveHelper;
