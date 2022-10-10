import React, { useEffect, useState } from 'react';
import { useSharedState } from '../../context/state';
import { encodeSVGPath, SVGPathData } from 'svg-pathdata';
import { useRouter } from 'next/router';
import Path from './Path';

const Icon = () => {
  const [state, setState] = useSharedState();
  const [data, setData] = useState([]);

  const generateData = () => {
    const res = [];
    let start = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    state.create.data.map((e, i) => {
      switch (e.type) {
        case SVGPathData.CLOSE_PATH: {
          res.push(
            <Path key={i} keyVal={i} data={`M${current.x} ${current.y}L${start.x} ${start.y}`} />
          );
          current = { x: start.x, y: start.y };
          break;
        }
        case SVGPathData.MOVE_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          start = { x: next.x, y: next.y };
          current = { x: next.x, y: next.y };
          break;
        }
        case SVGPathData.HORIZ_LINE_TO: {
          const next = e.relative ? current.x + e.x : e.x;
          res.push(
            <Path key={i} keyVal={i} data={`M${current.x} ${current.y}L${next} ${current.y}`} />
          );
          current.x = next;
          break;
        }
        case SVGPathData.VERT_LINE_TO: {
          const next = e.relative ? current.y + e.y : e.y;
          res.push(
            <Path key={i} keyVal={i} data={`M${current.x} ${current.y}L${current.x} ${next}`} />
          );
          current.y = next;
          break;
        }
        case SVGPathData.LINE_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          res.push(
            <Path key={i} keyVal={i} data={`M${current.x} ${current.y}L${next.x} ${next.y}`} />
          );
          current = { x: next.x, y: next.y };
          break;
        }
        case SVGPathData.CURVE_TO: {
          const next = {
            x: e.relative ? current.x + e.x : e.x,
            y: e.relative ? current.y + e.y : e.y,
          };
          res.push(
            <Path key={i} keyVal={i} data={`M${current.x} ${current.y}${encodeSVGPath(e)}`} />
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
          res.push(
            <Path
              key={i}
              keyVal={i}
              data={`M${current.x} ${current.y}C${x1} ${y1} ${x2} ${y2} ${next.x} ${next.y}`}
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
          res.push(
            <Path key={i} keyVal={i} data={`M${current.x} ${current.y}${encodeSVGPath(e)}`} />
          );
          current = { x: next.x, y: next.y, qx1: e.x1, qy1: e.y1 };
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
          res.push(
            <Path
              key={i}
              keyVal={i}
              data={`M${current.x} ${current.y}Q${x1} ${y1} ${next.x} ${next.y}`}
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
          res.push(
            <Path
              key={i}
              keyVal={i}
              data={`M${current.x} ${current.y}A${e.rX} ${e.rY} ${e.xRot} ${e.lArcFlag} ${e.sweepFlag} ${next.x} ${next.y}`}
            />
          );
          current = { x: next.x, y: next.y };
          break;
        }
      }
    });
    setData(res);
  };

  const router = useRouter();
  const { path } = router.query;
  let prevData = [];

  useEffect(() => {
    if (path) {
      const urlPath = path.replaceAll('_', ' ');
      const urlPathData = new SVGPathData(urlPath);
      prevData = urlPathData.commands;
      setState((p) => ({ ...p, create: { ...p.create, data: urlPathData.commands } }));
      router.push({pathname: '/create', query: {}}, undefined, {shallow: true})
      return;
    }
    const storedData = localStorage.getItem('createdIcon');
    const initialValue = storedData ? JSON.parse(storedData) : [];
    if (initialValue && !state.create.data.length && !prevData.length) {
      prevData = initialValue;
      setState((p) => ({ ...p, create: { ...p.create, data: initialValue } }));
    }
  }, [router.isReady]);

  useEffect(() => {
    generateData();
    if (!prevData.length) {
      localStorage.setItem('createdIcon', JSON.stringify(state.create.data));
    } else {
      prevData = [];
    }
  }, [state.create.data]);

  return (
    <>
      {data.map((e, i) => (
        <React.Fragment key={i}>{e}</React.Fragment>
      ))}
    </>
  );
};

export default Icon;
