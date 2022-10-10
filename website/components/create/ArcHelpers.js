import { useSharedState } from '../../context/state';
import { arcEllipseCenter, pointCircle } from './utils';

const ArcHelpers = ({ keyVal, x, y, x2, y2, rX, rY, xRot, lArcFlag, sweepFlag }) => {
  const [state, setState] = useSharedState();

  const toggleSweep = (e) => {
    e.stopPropagation();
    const newPathData = [...state.create.data];
    newPathData[keyVal].sweepFlag = newPathData[keyVal].sweepFlag === 1 ? 0 : 1;
    setState((p) => ({ ...p, create: { ...p.create, data: newPathData } }));
  };

  const toggleLargeFlag = (e) => {
    e.stopPropagation();
    const newPathData = [...state.create.data];
    newPathData[keyVal].lArcFlag = newPathData[keyVal].lArcFlag === 1 ? 0 : 1;
    setState((p) => ({ ...p, create: { ...p.create, data: newPathData } }));
  };

  const center = arcEllipseCenter(
    x,
    y,
    x2,
    y2,
    lArcFlag,
    sweepFlag,
    rX === 0 ? 0.001 : rX,
    rY === 0 ? 0.001 : rY,
    xRot
  );

  const radius1 = pointCircle(center, rX, xRot);
  const radius2 = pointCircle(center, rY, xRot + 90);
  const radius3 = pointCircle(center, rX, xRot + 180);

  center.x = center.x.toFixed(3)
  center.y = center.y.toFixed(3);
  radius1.x = radius1.x.toFixed(3);
  radius1.y = radius1.y.toFixed(3);
  radius2.x = radius2.x.toFixed(3);
  radius2.y = radius2.y.toFixed(3);
  radius3.x = radius3.x.toFixed(3);
  radius3.y = radius3.y.toFixed(3);

  return (
    <>
      <path
        className={`cursor-pointer stroke-slate-500/60 stroke-[.2] transition duration-75 dark:stroke-slate-500/70 ${
          state.create.settings.mode === 1 &&
          state.create.settings.selectMode === 1 &&
          state.create.settings.selectMode === 1
            ? ''
            : 'hidden'
        } ${
          state.create.hovering.has(`AH${keyVal}`) ? '!block !stroke-red-700 dark:!stroke-red-500' : ''
        }`}
        id={`AH${keyVal}`}
        d={`M${x2} ${y2}A${rX} ${rY} ${xRot} ${lArcFlag} ${sweepFlag} ${x} ${y}`}
        onMouseEnter={() => {
          setState((p) => ({
            ...p,
            create: {
              ...p.create,
              hovering:
                p.create.selected[0] === null
                  ? new Set([keyVal, `AH${keyVal}`])
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
        onClick={(e) => {
          toggleSweep(e);
        }}
      />
      <path
        className={`cursor-pointer stroke-slate-500/60 stroke-[.2] transition duration-75 dark:stroke-slate-500/70 ${
          state.create.settings.mode === 1 && state.create.settings.selectMode === 1
            ? ''
            : 'hidden'
        } ${
          state.create.hovering.has(`AHL${keyVal}`) ? '!block !stroke-red-500 dark:!stroke-red-500' : ''
        }`}
        id={`AHL${keyVal}`}
        d={`M${x} ${y}A${rX} ${rY} ${xRot} ${lArcFlag === 1 ? 0 : 1} ${sweepFlag} ${x2} ${y2}`}
        onMouseEnter={() => {
          setState((p) => ({
            ...p,
            create: {
              ...p.create,
              hovering:
                p.create.selected[0] === null
                  ? new Set([keyVal, `AHL${keyVal}`])
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
        onClick={(e) => {
          toggleLargeFlag(e);
        }}
      />
      <path
        className={`cursor-pointer stroke-slate-500/60 stroke-[.2] transition duration-75 dark:stroke-slate-500/70 ${
          state.create.settings.mode === 1 && state.create.settings.selectMode === 1
            ? ''
            : 'hidden'
        } ${
          state.create.hovering.has(`AHR${keyVal}-rX-null`)
            ? '!block !stroke-red-500 dark:!stroke-red-500'
            : ''
        }`}
        id={`AH${keyVal}-I`}
        d={`M${center.x} ${center.y}L${radius1.x} ${radius1.y}`}
        onMouseEnter={() => {
          setState((p) => ({
            ...p,
            create: {
              ...p.create,
              hovering:
                p.create.selected[0] === null
                  ? new Set([keyVal, `AHR${keyVal}-rX-null-${center.x}`, `AHR${keyVal}-rX-null`])
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
      />
      <path
        className={`cursor-pointer stroke-slate-500/60 stroke-[.2] transition duration-75 dark:stroke-slate-500/70 ${
          state.create.settings.mode === 1 && state.create.settings.selectMode === 1
            ? ''
            : 'hidden'
        } ${
          state.create.hovering.has(`AHR${keyVal}-null-rY`)
            ? '!block !stroke-red-500 dark:!stroke-red-500'
            : ''
        }`}
        id={`AH${keyVal}-null-rY`}
        d={`M${center.x} ${center.y}L${radius2.x} ${radius2.y}`}
        onMouseEnter={() => {
          setState((p) => ({
            ...p,
            create: {
              ...p.create,
              hovering:
                p.create.selected[0] === null
                  ? new Set([keyVal, `AHR${keyVal}-null-rY-${center.y}`, `AHR${keyVal}-null-rY`])
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
      />
      <path
        className={`stroke-slate-500/60 stroke-[.2] transition duration-75 dark:stroke-slate-500/70 ${
          state.create.settings.mode === 1 && state.create.settings.selectMode === 1
            ? ''
            : 'hidden'
        } ${
          state.create.hovering.has(`AHR${keyVal}-null-rY`) ||
          state.create.hovering.has(`AHR${keyVal}-rX-null`) ||
          state.create.hovering.has(`AHRC${keyVal}`)
            ? '!block !stroke-red-500 dark:!stroke-red-500'
            : ''
        }`}
        id={`AHRC${keyVal}`}
        d={`M${radius1.x} ${radius1.y}A${rX} ${rY} ${xRot} ${lArcFlag} ${sweepFlag} ${radius3.x} ${radius3.y}A${rX} ${rY} ${xRot} ${lArcFlag} ${sweepFlag} ${radius1.x} ${radius1.y}`}
        strokeDasharray='0.5'
        onMouseEnter={() => {
          setState((p) => ({
            ...p,
            create: {
              ...p.create,
              hovering:
                p.create.selected[0] === null
                  ? new Set([
                      keyVal,
                      `AHRC${keyVal}`,
                      `AHR${keyVal}-rX-null`,
                      `AHR${keyVal}-null-rY`,
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
      />
    </>
  );
};

export default ArcHelpers;
