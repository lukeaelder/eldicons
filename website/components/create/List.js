import { useSharedState } from '../../context/state';
import ListInput from './ListInput';
import { deletePath } from './utils';

const names = {
  1: 'Close',
  2: 'Move',
  4: 'Horizontal',
  8: 'Vertical',
  16: 'Line',
  32: 'Curve',
  64: 'Smooth Curve',
  128: 'Quad',
  256: 'Smooth Quad',
  512: 'Arc',
  123: 'hello',
};

const List = () => {
  const [state, setState] = useSharedState();

  const handleDeletePath = (i) => {
    const res = deletePath(state.create.data, i);
    setState((p) => ({ ...p, create: { ...p.create, data: res } }));
  };

  return (
    <ul className='flex h-full max-h-[20rem] flex-col gap-[1px] overflow-y-auto rounded-md border-[1px] border-slate-300 text-sm dark:border-slate-700 md:max-h-full'>
      {state.create.data.map((e, i) => {
        return (
          <li
            key={i}
            className={`group flex gap-4 border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 ${
              i % 2 === 0 ? 'bg-slate-100/40 dark:bg-slate-800/30' : ''
            } ${state.create.data[i].type === 2 ? 'pl-1' : 'pl-3'} ${
              i === state.create.data.length - 1 ? '' : 'border-b-[1px]'
            }`}
            onMouseEnter={() => {
              setState((p) => ({
                ...p,
                create: {
                  ...p.create,
                  hovering:
                    p.create.selected[0] === null
                      ? new Set([
                          i,
                          'listHover',
                          `PH${i}-x-y`,
                          `MH${i}-x-y`,
                          `PH${i}-x1-y1`,
                          `CH${i}-x1-y1`,
                          `PH${i}-x2-y2`,
                          `CH${i}-x2-y2`,
                          `SCH${i}-x1-y1`,
                          `QH${i}-x-y`,
                          `SQH${i}-x-y`,
                          `AH${i}`,
                          `AHL${i}`,
                          `AHR${i}-rX-null`,
                          `AHR${i}-null-rY`,
                          `AHRC${i}`,
                        ])
                      : p.create.hovering,
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
          >
            <div
              className={`relative h-min select-none group-hover:text-indigo-500 ${
                state.create.hovering.has(i) ? 'text-indigo-500' : ''
              }`}
            >
              <p
                className={`whitespace-nowrap px-1 py-1 transition will-change-transform group-hover:translate-x-2 ${
                  state.create.hovering.has(i) ? 'translate-x-2' : ''
                }`}
              >
                {names[e.type]}
              </p>
              <span
                className={`absolute -left-1 top-1/2 -translate-y-1/2  transition group-hover:scale-50 group-hover:opacity-100 ${
                  state.create.hovering.has(i) ? 'scale-50 opacity-100' : 'scale-0 opacity-0'
                }`}
              >
                ●
              </span>
            </div>
            <div className='flex w-full flex-wrap items-center'>
              {Object.entries(e).map((val, key) => {
                if (
                  val[0] !== 'type' &&
                  val[0] !== 'relative' &&
                  ((val[0] !== 'y' && e.type !== 8) || (val[0] !== 'x' && e.type !== 4))
                )
                  return <ListInput key={key} keyVal={i} vals={val} />;
              })}
              {state.create.data[i].type !== 2 ? (
                <div
                  className='group ml-auto mr-2 flex h-[1.75rem] w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-75 hover:bg-rose-500/80'
                  onClick={() => handleDeletePath(i)}
                >
                  <svg
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-4 w-4 rounded-md opacity-75 transition group-hover:opacity-100'
                  >
                    <path fill='none' stroke='none' d='M0 0h24v24H0z' />
                    <path d='M6 6L18 18M6 18L18 6' />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
      {state.create.data.length === 0 ? (
        <li className='flex border-slate-300 bg-slate-100/40 px-2 py-1 dark:border-slate-700 dark:bg-slate-800/30 md:border-b-[1px]'>
          No path commands
        </li>
      ) : null}
    </ul>
  );
};

export default List;
