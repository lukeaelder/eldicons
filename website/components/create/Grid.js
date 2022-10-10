import { useEffect, useState } from 'react';
import { encodeSVGPath, SVGPathData } from 'svg-pathdata';
import { useSharedState } from '../../context/state';
import GridBg from '../GridBg';
import Coordinates from './Coordinates';
import CordHelpers from './CordHelpers';
import Cursor from './Cursor';
import Icon from './Icon';
import Overlay from './Overlay';

const Grid = () => {
  const [state, setState] = useSharedState();
  const [created, setCreated] = useState([]);

  const updateMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const snap = state.create.settings.snap ? 1 / state.create.settings.snapAmount : 1000;
    const size = rect.width;
    let x = Math.round(e.clientX - rect.left);
    let y = Math.round(e.clientY - rect.top);
    if (x < 0) x = 0;
    if (x > size) x = size;
    if (y < 0) y = 0;
    if (y > size) y = size;
    const xPos = +(Math.round((x / size) * 24 * snap) / snap).toFixed(3);
    const yPos = +(Math.round((y / size) * 24 * snap) / snap).toFixed(3);
    setState((p) => ({
      ...p,
      create: {
        ...p.create,
        user: { ...p.create.user, x: xPos, y: yPos, mouseX: x, mouseY: y },
      },
    }));
  };

  useEffect(() => {
    return;
  }, [
    state.create.settings.snap,
    state.create.settings.snapAmount,
    state.create.hovering,
    state.create.selected,
  ]);

  useEffect(() => {
    if (state.create.data.length && state.create.data[0].type !== SVGPathData.MOVE_TO) {
      setState((p) => ({
        ...p,
        create: { ...p.create, data: [{ type: 2, relative: false, x: 0, y: 0 }, ...p.create.data] },
      }));
    }
    if (state.create.settings.mode === 1 && state.create.selected[0] !== null) {
      const newPathData = state.create.data.map((e, i) => {
        if (i === state.create.selected[0]) {
          if (state.create.data[i].relative === true) {
            if (state.create.data[i - 1]) {
              let count = 1;
              const absData = new SVGPathData(encodeSVGPath(state.create.data)).toAbs().commands;
              const prev = { x: null, y: null };
              while ((prev.x === null || prev.y === null) && absData[i - count]) {
                if (absData[i - count].x && absData[i - count].relative === false)
                  prev.x = absData[i - count].x;
                if (absData[i - count].y && absData[i - count].relative === false)
                  prev.y = absData[i - count].y;
                count++;
              }
              if (prev.x === null) prev.x = state.create.user.x;
              if (prev.y === null) prev.y = state.create.user.y;
              return {
                ...state.create.data[i],
                [state.create.selected[1]]:
                  prev.x > state.create.user.x
                    ? -Math.abs(prev.x - state.create.user.x)
                    : Math.abs(prev.x - state.create.user.x),
                [state.create.selected[2]]:
                  prev.y > state.create.user.y
                    ? -Math.abs(prev.y - state.create.user.y)
                    : Math.abs(prev.y - state.create.user.y),
              };
            } else {
              return {
                ...state.create.data[i],
                [state.create.selected[1]]: state.create.user.x,
                [state.create.selected[2]]: state.create.user.y,
              };
            }
          } else {
            if (state.create.selected[1] !== 'null' && state.create.selected[2] === 'null') {
              return {
                ...state.create.data[i],
                [state.create.selected[1]]: (
                  state.create.user.x - state.create.selected[3]
                ).toFixed(3),
              };
            }
            if (state.create.selected[1] === 'null' && state.create.selected[2] !== 'null') {
              return {
                ...state.create.data[i],
                [state.create.selected[2]]: (
                  state.create.user.y - state.create.selected[3]
                ).toFixed(3),
              };
            }
            if (state.create.selected[1] !== 'null' && state.create.selected[2] !== 'null') {
              return {
                ...state.create.data[i],
                [state.create.selected[1]]: state.create.user.x - state.create.selected[3],
                [state.create.selected[2]]: state.create.user.y - state.create.selected[3],
              };
            }
          }
        }
        return { ...e };
      });
      setState((p) => ({ ...p, create: { ...p.create, data: newPathData } }));
    }
    if (state.create.settings.mode === 0 && state.create.user.mouseDown === true) {
      switch (state.create.settings.drawType) {
        case 0: {
          setCreated([
            { ...created[0] },
            {
              ...created[1],
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
        case 1: {
          setCreated([
            { ...created[0] },
            {
              ...created[1],
              x1:
                state.create.user.x > created[0].x
                  ? created[0].x > 22
                    ? 23
                    : +(created[0].x + 2).toFixed(3)
                  : created[0].x < 2
                  ? 1
                  : +(created[0].x - 2).toFixed(3),
              y1:
                state.create.user.y > created[0].y
                  ? created[0].y > 22
                    ? 23
                    : +(created[0].y + 2).toFixed(3)
                  : created[0].y < 2
                  ? 1
                  : +(created[0].y - 2).toFixed(3),
              x2:
                state.create.user.x > created[0].x
                  ? state.create.user.x < 2
                    ? 1
                    : +(state.create.user.x - 2).toFixed(3)
                  : state.create.user.x > 22
                  ? 23
                  : +(state.create.user.x + 2).toFixed(3),
              y2:
                state.create.user.y > created[0].y
                  ? state.create.user.y < 2
                    ? 1
                    : +(state.create.user.y - 2).toFixed(3)
                  : state.create.user.y > 22
                  ? 23
                  : +(state.create.user.y + 2).toFixed(3),
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
        case 2: {
          const midPoint = {
            x: +((created[0].x + state.create.user.x) / 2).toFixed(3),
            y: +((created[0].y + state.create.user.y) / 2).toFixed(3),
          };
          setCreated([
            { ...created[0] },
            {
              ...created[1],
              relative: false,
              x1: midPoint.x,
              y1: midPoint.y,
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
        case 3: {
          setCreated([
            { ...created[0] },
            {
              ...created[1],
              rX:
                Math.abs(created[0].x - state.create.user.x) === 0
                  ? +(Math.abs(created[0].y - state.create.user.y) / 2).toFixed(3)
                  : +(Math.abs(created[0].x - state.create.user.x) / 2).toFixed(3),
              rY:
                Math.abs(created[0].x - state.create.user.x) === 0
                  ? +(Math.abs(created[0].y - state.create.user.y) / 2).toFixed(3)
                  : +(Math.abs(created[0].x - state.create.user.x) / 2).toFixed(3),
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
      }
    }
  }, [state.create.user.x, state.create.user.y]);

  const userMouseDown = () => {
    if (state.create.settings.mode === 1 && state.create.hovering.size > 1) {
      const helperData = [...state.create.hovering][1].split(/-/u);
      if (helperData[0].indexOf('PH') === 0) {
        setState((p) => ({
          ...p,
          create: {
            ...p.create,
            selected: [[...p.create.hovering][0], helperData[1], helperData[2], 0],
          },
        }));
      }
      if (helperData[0].indexOf('AHR') === 0) {
        setState((p) => ({
          ...p,
          create: {
            ...p.create,
            selected: [[...p.create.hovering][0], helperData[1], helperData[2], helperData[3]],
          },
        }));
      }
    }
    if (state.create.settings.mode === 0) {
      setState((p) => ({
        ...p,
        create: {
          ...p.create,
          user: {
            ...p.create.user,
            mouseDown: true,
          },
        },
      }));
      switch (state.create.settings.drawType) {
        case 0: {
          setCreated([
            {
              type: 2,
              relative: false,
              x: state.create.user.x,
              y: state.create.user.y,
            },
            {
              type: 16,
              relative: false,
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
        case 1: {
          setCreated([
            {
              type: 2,
              relative: false,
              x: state.create.user.x,
              y: state.create.user.y,
            },
            {
              type: 32,
              relative: false,
              x1: state.create.user.x,
              y1: state.create.user.y,
              x2: state.create.user.x,
              y2: state.create.user.y,
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
        case 2: {
          setCreated([
            {
              type: 2,
              relative: false,
              x: state.create.user.x,
              y: state.create.user.y,
            },
            {
              type: 128,
              relative: false,
              x1: state.create.user.x,
              y1: state.create.user.y,
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
        case 3: {
          setCreated([
            {
              type: 2,
              relative: false,
              x: state.create.user.x,
              y: state.create.user.y,
            },
            {
              type: 512,
              relative: false,
              rX: 0,
              rY: 0,
              xRot: 0,
              lArcFlag: 0,
              sweepFlag: 1,
              x: state.create.user.x,
              y: state.create.user.y,
            },
          ]);
          break;
        }
      }
    }
  };

  const endDrawPath = () => {
    const absData = new SVGPathData(encodeSVGPath(state.create.data)).toAbs().commands;
    const prev = { x: null, y: null };
    const keyVal = absData.length - 1;
    let newPath = true;
    let count = 0;
    while ((prev.x === null || prev.y === null) && absData[keyVal - count]) {
      if (absData[keyVal - count].x && prev.x === null) prev.x = absData[keyVal - count].x;
      if (absData[keyVal - count].y && prev.y === null) prev.y = absData[keyVal - count].y;
      count++;
    }
    if (prev.x === null) prev.x = state.create.user.x;
    if (prev.y === null) prev.y = state.create.user.y;
    if (created[0] && prev.x === created[0].x && prev.y === created[0].y) {
      newPath = false;
    }
    setState((p) => ({
      ...p,
      create: {
        ...p.create,
        user: {
          ...p.create.user,
          mouseDown: false,
        },
        data: newPath ? [...p.create.data, ...created] : [...p.create.data, created[1]],
      },
    }));
    setCreated([]);
  };

  const userMouseUp = () => {
    if (state.create.settings.mode === 1 && state.create.selected[0] !== null) {
      setState((p) => ({
        ...p,
        create: {
          ...p.create,
          selected: [null, null, null, 0],
        },
      }));
    }
    if (state.create.settings.mode === 0) {
      endDrawPath();
    }
  };

  const userMouseLeave = () => {
    if (state.create.settings.mode === 1 && state.create.selected[0] !== null) {
      setState((p) => ({
        ...p,
        create: {
          ...p.create,
          selected: [null, null, null, 0],
          hovering: new Set(),
        },
      }));
    }
    if (state.create.settings.mode === 0) {
      endDrawPath();
    }
  };

  return (
    <div
      className={`relative aspect-square w-full border-[1px] border-slate-300 shadow-lg dark:border-slate-700 dark:bg-slate-800  ${
        state.create.selected[0] !== null ? 'cursor-grabbing' : null
      } ${
        state.create.settings.mode === 0
          ? state.create.user.mouseDown
            ? 'cursor-grabbing'
            : 'cursor-pointer'
          : null
      }`}
      onMouseMove={(e) => updateMouse(e)}
      onMouseDown={() => userMouseDown()}
      onMouseUp={() => userMouseUp()}
      onMouseLeave={() => userMouseLeave()}
    >
      <GridBg />
      <svg
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='absolute w-[full] stroke-black dark:stroke-white'
      >
        <path fill='none' stroke='none' d='M0 0h24v24H0z' />
        <Icon />
        <Overlay />
        <CordHelpers />
        <path className='stroke-indigo-500/80' d={encodeSVGPath(created)} />
        <Cursor />
      </svg>
      <Coordinates />
    </div>
  );
};

export default Grid;
