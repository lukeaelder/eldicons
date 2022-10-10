import { useSharedState } from '../../context/state';
import { SVGPathData } from 'svg-pathdata';

const PointHelper = ({ keyVal, x, y, val1, val2, hoverControls, size = 'stroke-[1]' }) => {
  const [state, setState] = useSharedState();

  if (
    keyVal < state.create.data.length - 1 &&
    state.create.data[keyVal + 1].type !== SVGPathData.MOVE_TO &&
    val1 === 'x' &&
    val2 === 'y'
  ) {
    hoverControls.push(keyVal + 1);
  }

  return (
    <path
      className={`stroke-slate-500/80 ${size}  ${
        state.create.settings.mode === 1 ? '' : 'hidden'
      } ${
        state.create.selected[0] === '' ? 'cursor-grab' : 'cursor-grabbing'
      } transition duration-75 ${
        state.create.hovering.has(`PH${keyVal}-${val1}-${val2}`)
          ? '!block !stroke-red-500  dark:!stroke-red-500'
          : ''
      }`}
      id={`PH${keyVal}-${val1}-${val2}`}
      d={`M${x} ${y}L${x + 0.01} ${y}`}
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

export default PointHelper;
