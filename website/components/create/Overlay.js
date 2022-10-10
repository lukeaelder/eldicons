import React, { useEffect, useState } from 'react';
import { useSharedState } from '../../context/state';
import { SVGPathData } from 'svg-pathdata';
import PointHelper from './PointHelper';
import MoveHelper from './MoveHelper';
import QuadHelper from './QuadHelper';
import CurveHelper from './CurveHelper';
import SmoothQuadHelper from './SmoothQuadHelper';
import SmoothCurveHelper from './SmoothCurveHelper';
import ArcHelpers from './ArcHelpers';

const Overlay = () => {
  const [state, setState] = useSharedState();
  const [data, setData] = useState({ points: [], guides: [] });

  const generateData = () => {
    const pointRes = [];
    const guideRes = [];
    let start = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    state.create.data.map((e, i) => {
      switch (e.type) {
        case SVGPathData.CLOSE_PATH: {
          current = { x: start.x, y: start.y };
          break;
        }
        case SVGPathData.MOVE_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`, `MH${i}-x-y`]}
            />
          );
          guideRes.push(
            <MoveHelper
              key={i}
              keyVal={i}
              x={current.x}
              y={current.y}
              x2={next.x}
              y2={next.y}
              hoverControls={[i, `PH${i}-x-y`, `MH${i}-x-y`]}
            />
          );
          start = { x: next.x, y: next.y };
          current = { x: next.x, y: next.y };
          break;
        }
        case SVGPathData.HORIZ_LINE_TO: {
          const next = e.relative ? current.x + e.x : e.x;
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next}
              y={current.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          current = { x: next, y: current.y };
          break;
        }
        case SVGPathData.VERT_LINE_TO: {
          const next = e.relative ? current.y + e.y : e.y;
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={current.x}
              y={next}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          current = { x: current.x, y: next };
          break;
        }
        case SVGPathData.LINE_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          current = { x: next.x, y: next.y };
          break;
        }
        case SVGPathData.CURVE_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          const next1 = {
            x: e.relative ? current.x + e.x1 : e.x1,
            y: e.relative ? current.y + e.y1 : e.y1,
          };
          const next2 = {
            x: e.relative ? current.x + e.x2 : e.x2,
            y: e.relative ? current.y + e.y2 : e.y2,
          };
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next1.x}
              y={next1.y}
              val1={'x1'}
              val2={'y1'}
              hoverControls={[i, `PH${i}-x1-y1`, `CH${i}-x1-y1`]}
              size='stroke-[.6]'
            />
          );
          guideRes.push(
            <CurveHelper
              key={i}
              keyVal={i}
              x={next1.x}
              y={next1.y}
              x2={current.x}
              y2={current.y}
              val1={'x1'}
              val2={'y1'}
              hoverControls={[i, `PH${i}-x1-y1`, `CH${i}-x1-y1`]}
            />
          );
          const hoverControls = [i, `PH${i}-x2-y2`, `CH${i}-x2-y2`];
          if (
            i < state.create.data.length - 1 &&
            state.create.data[i + 1].type === SVGPathData.SMOOTH_CURVE_TO
          ) {
            hoverControls.push(`SCH${i + 1}-x1-y1`);
          }
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next2.x}
              y={next2.y}
              val1={'x2'}
              val2={'y2'}
              hoverControls={hoverControls}
              size='stroke-[.6]'
            />
          );
          guideRes.push(
            <CurveHelper
              key={i}
              keyVal={i}
              x={next2.x}
              y={next2.y}
              x2={next.x}
              y2={next.y}
              val1={'x2'}
              val2={'y2'}
              hoverControls={hoverControls}
            />
          );
          current = {
            x: next.x,
            y: next.y,
            x2: e.relative ? current.x + e.x2 : e.x2,
            y2: e.relative ? current.y + e.y2 : e.y2,
          };
          break;
        }
        case SVGPathData.SMOOTH_CURVE_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          const difX = current.x - current.x2;
          const difY = current.y - current.y2;
          const x1 = current.x + difX;
          const y1 = current.y + difY;
          const x2 = e.relative ? current.x + e.x2 : e.x2;
          const y2 = e.relative ? current.y + e.y2 : e.y2;
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          const hoverControls = [i, `PH${i}-x2-y2`, `CH${i}-x2-y2`];
          if (
            i < state.create.data.length - 1 &&
            state.create.data[i + 1].type === SVGPathData.SMOOTH_CURVE_TO
          ) {
            hoverControls.push(`SCH${i + 1}-x1-y1`);
          }
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={x2}
              y={y2}
              val1={'x2'}
              val2={'y2'}
              hoverControls={hoverControls}
              size='stroke-[.6]'
            />
          );
          guideRes.push(
            <CurveHelper
              key={i}
              keyVal={i}
              x={x2}
              y={y2}
              x2={next.x}
              y2={next.y}
              val1={'x2'}
              val2={'y2'}
              hoverControls={hoverControls}
            />
          );
          guideRes.push(
            <SmoothCurveHelper
              key={i}
              keyVal={i}
              x={x1}
              y={y1}
              x2={current.x}
              y2={current.y}
              val1={'x1'}
              val2={'y1'}
              hoverControls={[i, `SCH${i}-x1-y1`]}
            />
          );
          current = { x: next.x, y: next.y, x2: e.x2, y2: e.y2 };
          break;
        }
        case SVGPathData.QUAD_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          const hoverControls = [i, `PH${i}-x1-y1`, `QH${i}-x1-y1`];
          let nextVal = 1;
          while (
            state.create.data[i + nextVal] &&
            state.create.data[i + nextVal].type === SVGPathData.SMOOTH_QUAD_TO
          ) {
            hoverControls.push(`SQH${i + nextVal}-x1-y1`);
            nextVal++;
          }
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={e.x1}
              y={e.y1}
              val1={'x1'}
              val2={'y1'}
              hoverControls={hoverControls}
              size='stroke-[.6]'
            />
          );
          guideRes.push(
            <QuadHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              x2={e.x1}
              y2={e.y1}
              x3={current.x}
              y3={current.y}
              hoverControls={hoverControls}
            />
          );
          current = { x: e.x, y: e.y, qx1: e.x1, qy1: e.y1 };
          break;
        }
        case SVGPathData.SMOOTH_QUAD_TO: {
          let x1 = current.qx1 ? current.x + (current.x - current.qx1) : e.x1;
          let y1 = current.qy1 ? current.y + (current.y - current.qy1) : e.y1;
          if (x1 === undefined) x1 = current.x * 2;
          if (y1 === undefined) y1 = current.y * 2;
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          guideRes.push(
            <SmoothQuadHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              x2={x1}
              y2={y1}
              x3={current.x}
              y3={current.y}
              hoverControls={[i, `PH${i}-x1-y1`, `SQH${i}-x1-y1`]}
            />
          );
          current = { x: next.x, y: next.y, qx1: x1, qy1: y1 };
          break;
        }
        case SVGPathData.ARC: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          pointRes.push(
            <PointHelper
              key={i}
              keyVal={i}
              x={next.x}
              y={next.y}
              val1={'x'}
              val2={'y'}
              hoverControls={[i, `PH${i}-x-y`]}
            />
          );
          guideRes.push(
            <ArcHelpers
              key={i}
              keyVal={i}
              x={current.x}
              y={current.y}
              x2={next.x}
              y2={next.y}
              rX={e.rX}
              rY={e.rY}
              xRot={e.xRot}
              lArcFlag={e.lArcFlag}
              sweepFlag={e.sweepFlag}
            />
          );
          current = { x: next.x, y: next.y };
          break;
        }
      }
    });
    setData({ points: pointRes, guides: guideRes });
  };

  useEffect(() => {
    generateData();
  }, [state.create.data]);

  return (
    <>
      {data.guides.map((e, i) => (
        <React.Fragment key={i}>{e}</React.Fragment>
      ))}
      {data.points.map((e, i) => (
        <React.Fragment key={i}>{e}</React.Fragment>
      ))}
    </>
  );
};

export default Overlay;
