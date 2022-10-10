import { useSharedState } from '../../context/state';
import { useState, useRef, useEffect } from 'react';
import { SVGPathData, encodeSVGPath } from 'svg-pathdata';

function TO_FIXED(position = 3) {
  return function (command) {
    if (command.x) command.x = +command.x.toFixed(position);
    if (command.y) command.y = +command.y.toFixed(position);
    if (command.x1) command.x1 = +command.x1.toFixed(position);
    if (command.y1) command.y1 = +command.y1.toFixed(position);
    if (command.x2) command.x2 = +command.x2.toFixed(position);
    if (command.y2) command.y2 = +command.y2.toFixed(position);
    return command;
  };
}

const CreateMenu = () => {
  const [state, setState] = useSharedState();
  const [clearState, setClearState] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  const handleClear = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (clearState === 1) {
      setState((p) => ({
        ...p,
        create: { ...p.create, data: [] },
      }));
      clearTimeout(timer.current);
      setClearState(0);
      return;
    }
    timer.current = setTimeout(() => setClearState(0), 3000);
    setClearState(1);
  };

  const modifyPath = (e) => {
    if (e.target.value === undefined) return;
    switch (Number(e.target.value)) {
      case 1: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .toAbs()
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
      case 2: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .toRel()
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
      case 3: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .normalizeHVZ()
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
      case 4: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .normalizeST()
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
      case 5: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .qtToC()
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
      case 6: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .aToC()
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
      case 7: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .xSymmetry(24)
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
      case 8: {
        const newData = new SVGPathData(encodeSVGPath(state.create.data))
          .ySymmetry(24)
          .transform(TO_FIXED(3)).commands;
        setState((p) => ({ ...p, create: { ...p.create, data: newData } }));
        break;
      }
    }
    e.target.selectedIndex = 0;
  };

  const createPath = (e) => {
    if (e.target.value === undefined) return;
    const res = [...state.create.data];
    const base = { type: Number(e.target.value), relative: false };
    if (!res.length && Number(e.target.value) !== 2) {
      res.push({
        ...base,
        type: 2,
        x: 0,
        y: 0,
      });
    }
    switch (Number(e.target.value)) {
      case 1: {
        res.push({
          ...base,
        });
        break;
      }
      case 2: {
        res.push({
          ...base,
          x: 12,
          y: 12,
        });
        break;
      }
      case 4: {
        res.push({
          ...base,
          x: 12,
        });
        break;
      }
      case 8: {
        res.push({
          ...base,
          y: 12,
        });
        break;
      }
      case 16: {
        res.push({
          ...base,
          x: 12,
          y: 12,
        });
        break;
      }
      case 32: {
        res.push({
          ...base,
          x1: 8,
          y1: 8,
          x2: 12,
          y2: 8,
          x: 12,
          y: 12,
        });
        break;
      }
      case 64: {
        res.push({
          ...base,
          x2: 12,
          y2: 16,
          x: 16,
          y: 16,
        });
        break;
      }
      case 128: {
        res.push({
          ...base,
          x1: 16,
          y1: 8,
          x: 12,
          y: 12,
        });
        break;
      }
      case 256: {
        res.push({
          ...base,
          x: 8,
          y: 16,
        });
        break;
      }
      case 512: {
        res.push({
          ...base,
          rX: 2,
          rY: 2,
          xRot: 0,
          lArcFlag: 0,
          sweepFlag: 1,
          x: 16,
          y: 12,
        });
        break;
      }
    }
    e.target.selectedIndex = 0;

    setState((p) => ({ ...p, create: { ...p.create, data: res } }));
  };

  return (
    <div className='mb-3 flex w-full items-center justify-center gap-2'>
      <div
        className={`relative flex cursor-pointer items-center gap-2 rounded-lg border-[1px] border-slate-500 stroke-slate-500 p-2 text-slate-500 shadow-[0_0_0_0px] shadow-indigo-500/0 transition hover:border-indigo-500 hover:stroke-indigo-500
              hover:text-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-400 dark:stroke-slate-400 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:stroke-indigo-500 dark:hover:text-indigo-500
          `}
      >
        <p>Create</p>
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-4 w-4'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M6 9L12 15L18 9' />
        </svg>
        <select
          className='absolute top-0 left-0 h-full w-full cursor-pointer appearance-none bg-transparent text-transparent outline-none'
          onChange={(e) => createPath(e)}
          value={undefined}
        >
          <option value={undefined}></option>
          <option value={2}>Move</option>
          <option value={4}>Horizontal</option>
          <option value={8}>Vertical</option>
          <option value={16}>Line</option>
          <option value={32}>Curve</option>
          <option value={128}>Quad</option>
          <option value={512}>Arc</option>
        </select>
      </div>
      <div
        className={`relative flex cursor-pointer items-center gap-2 rounded-lg border-[1px] border-slate-500 stroke-slate-500 p-2 text-slate-500 shadow-[0_0_0_0px] shadow-indigo-500/0 transition hover:border-indigo-500 hover:stroke-indigo-500
              hover:text-indigo-500 hover:shadow-[0_0_0_4px] hover:shadow-indigo-500/30 dark:border-slate-400 dark:stroke-slate-400 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:stroke-indigo-500 dark:hover:text-indigo-500
          `}
      >
        <p>Modify</p>
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-4 w-4'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path d='M6 9L12 15L18 9' />
        </svg>
        <select
          className='absolute top-0 left-0 h-full w-full cursor-pointer appearance-none bg-transparent text-transparent outline-none'
          onChange={(e) => modifyPath(e)}
          value={undefined}
        >
          <option value={undefined}></option>
          <option value={1}>Relative → absolute</option>
          <option value={2}>Absolute → relative</option>
          <option value={3}>H, V, Z → L</option>
          <option value={4}>S, T → C, Q</option>
          <option value={5}>Q, T → C</option>
          <option value={6}>A → C</option>
          <option value={7}>Mirror x axis</option>
          <option value={8}>Mirror y axis</option>
        </select>
      </div>
      <div
        className={`relative cursor-pointer rounded-lg border-[1px] border-slate-500 stroke-slate-500 p-2 shadow-[0_0_0_0px] shadow-rose-500/0 
            transition hover:border-rose-500 hover:stroke-rose-500 hover:shadow-[0_0_0_4px] hover:shadow-rose-500/30 dark:border-slate-400 dark:stroke-slate-400 dark:hover:border-rose-500 dark:hover:stroke-rose-500
         ${
           clearState === 1
             ? 'dark:!border-rose-5 !border-rose-500 !stroke-rose-500 !shadow-[0_0_0_4px] !shadow-rose-500/30 dark:!stroke-rose-500'
             : ''
         }`}
        onClick={() => handleClear()}
      >
        <svg
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-6 w-6 stroke-inherit'
        >
          <path fill='none' stroke='none' d='M0 0h24v24H0z' />
          <path
            d={
              clearState === 0
                ? 'M4 7H20M9 7V4A1 1 0 0 1 10 3H14A1 1 0 0 1 15 4V7M10 11V17M14 11V17M19 7L18.133 19.142A2 2 0 0 1 16.138 21H7.862A2 2 0 0 1 5.867 19.142L5 7'
                : 'M5 12L10 17L20 7'
            }
          />
        </svg>
        <div
          className={`absolute top-0 left-0 h-full w-full origin-bottom scale-0 rounded-md bg-rose-500/30 ${
            clearState === 1 ? 'animate-[countdown_3s_ease-in-out]' : ''
          }`}
        ></div>
      </div>
    </div>
  );
};

export default CreateMenu;
