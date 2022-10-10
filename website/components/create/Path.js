import { useSharedState } from '../../context/state';
import { SVGPathData, encodeSVGPath } from 'svg-pathdata';
import { deletePath } from './utils';

const Path = ({ keyVal, data }) => {
  const [state, setState] = useSharedState();

  const handleDeletePath = () => {
    if (state.create.settings.mode === 2) {
      const res = deletePath(state.create.data, keyVal)
      setState((p) => ({ ...p, create: { ...p.create, data: res } }));
    }
  };

  return (
    <path
      id={keyVal}
      key={keyVal}
      d={data}
      className={`transition duration-75 ${state.create.settings.mode === 2 ? 'cursor-pointer' : ''} ${
        state.create.hovering.has(keyVal) ? 'stroke-indigo-500/80' : ''
      }`}
      onMouseEnter={() => {
        setState((p) => ({
          ...p,
          create: {
            ...p.create,
            hovering: p.create.selected[0] === null ? new Set([keyVal]) : p.create.hovering,
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
      onClick={() => handleDeletePath()}
    />
  );
};

export default Path;
