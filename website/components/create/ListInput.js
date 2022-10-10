import { useState, useEffect } from 'react';
import { encodeSVGPath, SVGPathData } from 'svg-pathdata';
import { useSharedState } from '../../context/state';
SVGPathData.curve
const ListInput = ({ keyVal, vals }) => {
  const [state, setState] = useSharedState();
  const [input, setInput] = useState(state.create.data[keyVal][vals[0]] || '');
  const [err, setErr] = useState(false);

  const updateState = (e) => {
    setInput(e.target.value);
    if (!isNaN(e.target.value) && !isNaN(parseFloat(e.target.value))) {
      const newData = [...state.create.data];
      newData[keyVal] = { ...newData[keyVal], [vals[0]]: Number(e.target.value) };
      if (e.target.value.length) {
        setState((p) => ({
          ...p,
          create: {
            ...p.create,
            data: newData,
          },
        }));
        setErr(false);
      }
    } else {
      setErr(true);
    }
  };

  const updateStateToggle = () => {
    const newData = [...state.create.data];
    const val = newData[keyVal][vals[0]] === 1 ? 0 : 1;
    newData[keyVal] = {
      ...newData[keyVal],
      [vals[0]]: (newData[keyVal][vals[0]] = val),
    };
    setInput(val);
    setState((p) => ({
      ...p,
      create: {
        ...p.create,
        data: newData,
      },
    }));
  };

  useEffect(() => {
    const res = state.create.data[keyVal][vals[0]];
    setInput(res);
    setErr(false);
  }, [state.create.data]);

  return (
    <div
      id={`LI${keyVal}-${'x' + vals[0].substring(1)}-${'y' + vals[0].substring(1)}`}
      className={`relative rounded-md transition duration-75 hover:bg-indigo-500/50 ${
        err ? '!bg-red-500/80' : 'focus-within:!bg-indigo-500/50'
      } ${
        ((state.create.hovering.has(`PH${keyVal}-x-y`) && vals[0].substring(1) === null) ||
          state.create.hovering.has(
            `PH${keyVal}-${'x' + vals[0].substring(1)}-${'y' + vals[0].substring(1)}`
          )) &&
        !state.create.hovering.has('listHover')
          ? 'bg-indigo-500/50 '
          : ''
      }`}
      onMouseEnter={() => {
        setState((p) => ({
          ...p,
          create: {
            ...p.create,
            hovering:
              p.create.selected[0] === null
                ? new Set([
                    keyVal,
                    'listHover',
                    `CHC${keyVal}-${vals[0]}`,
                    `PH${keyVal}-${'x' + vals[0].substring(1)}-${'y' + vals[0].substring(1)}`,
                    `CH${keyVal}-${'x' + vals[0].substring(1)}-${'y' + vals[0].substring(1)}`,
                    `QH${keyVal}-${'x' + vals[0].substring(1)}-${'y' + vals[0].substring(1)}`,
                    `AH${keyVal}-${'x' + vals[0].substring(1)}-${'y' + vals[0].substring(1)}`,
                    `${
                      state.create.data[keyVal].type === 4 ||
                      state.create.data[keyVal].type === 8 ||
                      vals[0] === 'xRot'
                        ? ''
                        : 'showCords'
                    }`,
                    `${vals[0] === 'lArcFlag' ? `AHL${keyVal}` : ''}`,
                    `${vals[0] === 'sweepFlag' ? `AH${keyVal}` : ''}`,
                    `${vals[0] === 'rX' ? `AHR${keyVal}-rX-null` : ''}`,
                    `${vals[0] === 'rY' ? `AHR${keyVal}-null-rY` : ''}`,
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
      <div className='relative px-1 py-1 lg:px-[.375rem]'>
        {vals[0] === 'sweepFlag' || vals[0] === 'lArcFlag' ? (
          <div
            className='peer absolute top-0 left-0 h-full w-full cursor-pointer'
            onClick={() => updateStateToggle()}
          ></div>
        ) : (
          <input
            type='number'
            value={input}
            onChange={(e) => updateState(e)}
            className='peer absolute left-0 top-0 h-full w-full appearance-none bg-transparent px-1 text-right text-transparent caret-black outline-none dark:caret-white lg:px-[.375rem] '
          />
        )}

        <p
          className={`transition group-hover:opacity-100 peer-focus:!opacity-100 ${
            state.create.hovering.has(keyVal) ? 'opacity-100' : 'opacity-75'
          }`}
        >
          {vals[0]}: {input}
        </p>
      </div>
    </div>
  );
};

export default ListInput;
